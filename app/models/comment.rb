class Comment < ApplicationRecord
  belongs_to :author, class_name: 'User', foreign_key: 'author_id'
  has_many :likes, as: :likeable
  has_many :comments, as: :commentable
  belongs_to :commentable, polymorphic: true
end