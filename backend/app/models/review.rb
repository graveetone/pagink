class Review < ApplicationRecord
  belongs_to :author, class_name: 'User', foreign_key: 'author_id'
  belongs_to :book
  has_many :likes, as: :likeable
  has_many :comments, as: :commentable
end
