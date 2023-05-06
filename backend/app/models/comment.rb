class Comment < ApplicationRecord
  belongs_to :author, class_name: 'User', foreign_key: 'author_id'
  has_many :likes, as: :likeable
  belongs_to :origin, class_name: 'Comment', foreign_key: 'origin_id', optional: true
  has_many :replies, class_name: 'Comment', foreign_key: 'origin_id', dependent: :destroy

  scope :for_reviews, -> { where(commentable_type: 'Review') }
  scope :for_ginks, -> { where(commentable_type: 'Gink') }

  def flatten_replies
    replies.each_with_object([self]) do |reply, array|
      array.concat(reply.flatten_replies)
    end
  end
end
