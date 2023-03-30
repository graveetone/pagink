class Book < ApplicationRecord
    has_and_belongs_to_many :lists, class_name: 'BooksList'
    has_and_belongs_to_many :authors, class_name: 'Author'
    belongs_to :publisher
    has_many :raitings
end
