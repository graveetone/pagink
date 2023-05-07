class ReviewSerializer < BaseSerializer
  attributes %i[id text author likedByCurrentUser likesCount commentsCount timestamp book type]

  def type
    :review
  end

  def likesCount
    object.likes.count
  end

  def likedByCurrentUser
    object.likes.find_by(user: scope) if scope.present?
  end

  def commentsCount
    object.comments.count
  end

  def author
    UserAuthorSerializer.new(object.author).as_json
  end

  def book
    BookOfAuthorSerializer.new(object.book).as_json
  end

  def comments
    ActiveModel::Serializer::CollectionSerializer.new(
      object.comments,
      serializer: CommentSerializer
    )
  end
end
