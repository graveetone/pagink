class CommentSerializer < BaseSerializer
  attributes %i[id author likedBy text timestamp origin repliesCount commentable]

  def likes_count
    object.likes.count
  end

  def author
    UserAuthorSerializer.new(object.author).as_json
  end

  def repliesCount
    object.replies.count
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
