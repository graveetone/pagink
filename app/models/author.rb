class Author < ApplicationRecord
    has_and_belongs_to_many :books, class_name: "Book"
end
