require 'faraday'

API_KEY = 'AIzaSyCGTxAfqCX5kMRs9EpWTbkTdqT1QkLNFpk'
GOOGLE_BOOKS_URL = 'https://www.googleapis.com'
SEARCH_ENDPOINT = '/books/v1/volumes/%s'

IMAGE_LINK = 'http://books.google.com/books/publisher/content/images/frontcover/%s?w=500&h=500'

class GoogleBooksBookCreatorService
  attr_accessor :query, :connection, :item

  def initialize(id)
    @query = format(SEARCH_ENDPOINT, id)
    @connection ||= Faraday.new(url: GOOGLE_BOOKS_URL)
  end

  def get_book
    if response.success?
        parse_item_from_response
        find_book_by_item || create_book_from_item
    else
        PaginkErrorBuilder.new(
            :cannot_get_info_from_gb_api
        ).render
    end
  end

  private

  def parse_item_from_response
    @item = JSON.parse(response.body).deep_symbolize_keys
  end

  def response
    connection.get(query, query_params)
  end

  def query_params
    {
      q: query,
      key: API_KEY
    }
  end

  def find_book_by_item
    Book.find_by(title: title, isbn: isbn)
  end

  def create_book_from_item
    Book.create(
      title: title,
      isbn: isbn,
      authors: authors,
      image_link: image_link,
      description: description,
      publisher: publisher,
      pages_count: pages_count
    )
  end

  def title
    item[:volumeInfo][:title]
  end

  def isbn
    industry_identifiers = item[:volumeInfo][:industryIdentifiers]
    return unless industry_identifiers

    industry_identifiers.each do |identifier|
      return identifier[:identifier] if %w[ISBN_13 ISBN_10].include?(identifier[:type])
    end

    nil
  end

  def description
    item[:volumeInfo][:description]
  end

  def categories
    item[:volumeInfo]&.[](:categories) # USE THIS
  end

  def authors
    item[:volumeInfo][:authors].map do |author_name|
      Author.find_or_create_by(name: author_name)
    end
  end

  def image_link
    ImageLink.create(
      url: format(IMAGE_LINK, item[:id])
    )
  end

  def publisher
    Publisher.create_or_find_by(
      name: item[:volumeInfo][:publisher] || 'Unknown'
    )
  end

  def pages_count
    item[:volumeInfo][:pageCount]
  end
end
