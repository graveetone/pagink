class CommentSerializer < BaseSerializer
  attributes %i[id author likedByCurrentUser text timestamp origin repliesCount commentable likesCount]

  def likesCount
    object.likes.count
  end

  def author
    UserAuthorSerializer.new(object.author).as_json
  end

  def repliesCount
    object.replies.count
  end

  def likedByCurrentUser
    object.likes.find_by(user: scope) if scope.present?
  end

  def origin
    origin_comment = object.origin

    return unless origin_comment

    {
      id: origin_comment.id,
      text: origin_comment.text,
      author: {
        id: origin_comment.author.id,
        username: origin_comment.author.username,
        image_url: origin_comment.author.image_link.url
      }
    }
  end

  def commentable
    {
      commentable_id: object.commentable_id,
      commentable_type: object.commentable_type
    }
  end
end
