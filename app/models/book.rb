class Book < ApplicationRecord
    has_and_belongs_to_many :shelves, class_name: 'Shelve'
    has_and_belongs_to_many :authors, class_name: 'Author'
    belongs_to :publisher
    has_many :raitings
    has_many :reviews
    has_one :image_link, as: :imageable
end
