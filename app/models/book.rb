class Book < ApplicationRecord
    has_and_belongs_to_many :lists, class_name: 'BooksList'
end
