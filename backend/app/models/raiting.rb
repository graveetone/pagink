class Raiting < ApplicationRecord
  belongs_to :author, class_name: 'User', foreign_key: 'author_id'
  belongs_to :book

  validates :book_id, uniqueness: { scope: :author_id }
end
