class BookmatesRelation < ApplicationRecord
    belongs_to :bookmate, class_name: 'User', foreign_key: :bookmate_id
    belongs_to :bookmatee, class_name: 'User', foreign_key: :bookmatee_id
end
