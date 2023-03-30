class User < ApplicationRecord
    has_many :lists, class_name: "BooksList", foreign_key: 'author_id'
    has_many :ginks, class_name: "Gink", foreign_key: 'author_id'
    has_many :raitings, class_name: 'Raiting', foreign_key: 'author_id'
    has_many :reviews, class_name: 'Review', foreign_key: 'author_id'
    has_one :image_link, as: :imageable
end
