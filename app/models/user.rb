class User < ApplicationRecord
    has_many :lists, class_name: "BooksList", foreign_key: 'author_id'
end
