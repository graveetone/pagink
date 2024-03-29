require 'faraday'

API_KEY = 'AIzaSyCGTxAfqCX5kMRs9EpWTbkTdqT1QkLNFpk'
GOOGLE_BOOKS_URL = 'https://www.googleapis.com/'

IMAGE_URL = 'http://books.google.com/books/publisher/content/images/frontcover/%s?w=500&h=500'
PER_PAGE = 40

class GoogleBooksSearchService
  SEARCH_ENDPOINT = '/books/v1/volumes/'

  attr_accessor :query, :page, :connection

  def initialize(query: '', page:)
    @query = query
    @page = page

    @connection = Faraday.new(url: GOOGLE_BOOKS_URL)
  end

  def search
    if response.success?
      if parsed_response[:totalItems] > 0
        parsed_response[:items].reject do |book_data|
          book_data[:volumeInfo][:language] == 'ru'
        end.map do |book_data|
          get_book_info_from_response(book_data)
        end
      else
        []
      end
    else
      puts "API call failed with status #{response.status}."
    end
  end

  private

  def parsed_response
    JSON.parse(response.body).deep_symbolize_keys
  end

  def response
    @connection.get(SEARCH_ENDPOINT, query_params)
  end

  def query_params
    {
      q: @query,
      key: API_KEY,
      startIndex: (@page - 1) * PER_PAGE,
      maxResults: PER_PAGE
    }
  end

  def get_book_info_from_response(response)
    info = response[:volumeInfo]

    {
      id: response[:id],
      title: info[:title],
      authors: info[:authors]&.map { |author| { name: author } },
      image_url: format(IMAGE_URL, response[:id])
    }
  end
end
