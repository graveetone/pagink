class User < ApplicationRecord
    has_many :shelves, class_name: "Shelve", foreign_key: 'author_id'
    has_many :ginks, class_name: "Gink", foreign_key: 'author_id'
    has_many :raitings, class_name: 'Raiting', foreign_key: 'author_id'
    has_many :reviews, class_name: 'Review', foreign_key: 'author_id'
    has_one :image_link, as: :imageable, dependent: :destroy
    has_many :notifications
    has_many :received_messages, class_name: 'Message', foreign_key: 'recipient_id'
    has_many :sent_messages, class_name: 'Message', foreign_key: 'author_id'

    # user can block another user
    # blocker - initiator, blocked - user that has been blocked
    has_many :blocker_relations, foreign_key: "blocker_id", class_name: 'BlockUsersRelation'
    has_many :blockers, through: :blocker_relations, source: :blockee

    has_many :blockee_relations, foreign_key: "blockee_id", class_name: 'BlockUsersRelation'
    has_many :blockees, through: :blockee_relations, source: :blocker

    # user can be bookmate of another user
    # bookmate - initiator, bookmatee - receiver of friendship request
    has_many :bookmate_relations, foreign_key: "bookmate_id", class_name: 'BookmatesRelation'
    has_many :bookmates, through: :bookmate_relations, source: :bookmatee

    has_many :bookmatee_relations, foreign_key: "bookmatee_id", class_name: 'BookmatesRelation'
    has_many :bookmatees, through: :bookmatee_relations, source: :bookmate

    has_many :likes
    has_many :comments, class_name: 'Comment', foreign_key: 'author_id'
end
