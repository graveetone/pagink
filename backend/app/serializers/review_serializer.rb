class ReviewSerializer < BaseSerializer
  attributes %i[id text author likedBy comments_count timestamp book type]

  def type
    :review
  end

  def likedBy
    object.likes.pluck(:user_id)
  end

  def comments_count
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
