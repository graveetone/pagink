class Author < ApplicationRecord
  has_and_belongs_to_many :books, class_name: 'Book'
  has_one :image_link, as: :imageable
end
