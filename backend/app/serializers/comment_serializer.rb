class CommentSerializer < BaseSerializer
  attributes %i[id author likedBy text timestamp]

  def likes_count
    object.likes.count
  end

  def author
    UserAuthorSerializer.new(object.author).as_json
  end

  def commentsCount
    object.comments.count
  end

  def likedBy
    object.likes.pluck(:user_id)
  end
end
