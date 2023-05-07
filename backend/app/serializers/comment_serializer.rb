class CommentSerializer < BaseSerializer
  attributes %i[id author likedBy text timestamp origin]

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

  def origin
    origin_comment = object.origin

    return unless origin_comment

    {
      id: origin_comment.id,
      text: origin_comment.text,
      authorUsername: origin_comment.author.username
    }
  end
end
