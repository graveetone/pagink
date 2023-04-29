class Book < ApplicationRecord
  has_and_belongs_to_many :shelves, class_name: 'Shelve'
  has_and_belongs_to_many :authors, class_name: 'Author'
  belongs_to :publisher
  has_many :raitings
  has_many :reviews
  has_one :image_link, as: :imageable, dependent: :destroy

  def add_author(author)
    authors << author unless authors.include?(author)
  end

  def self.search(query)
    if BookSearchHelper.string_with_numbers_only?(query)
      Book.search_by_isbn(query)
    else
      found_by_title = Book.search_by_title(query)
      found_by_author_name = Book.search_by_author_name(query)

      (found_by_title + found_by_author_name).uniq
    end
  end

  def self.search_by_title(title)
    puts 'title'

    where('title LIKE ?', "%#{title}%")
  end

  def self.search_by_author_name(author_name)
    puts 'authors'
    joins(:authors).where('authors.name LIKE ?', "%#{author_name}%")
  end

  def self.search_by_isbn(isbn)
    puts 'isbn'
    find_by(isbn: isbn)
  end
end
