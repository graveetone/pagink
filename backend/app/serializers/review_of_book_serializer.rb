class ReviewOfBookSerializer < BaseSerializer
  attributes %i[id text commentsCount timestamp likedByCurrentUser book author type likesCount]
  def type
    :review
  end

  def commentsCount
    object.comments.count
  end

  def likesCount
    object.likes.count
  end

  def likedByCurrentUser
    object.likes.find_by(user: scope) if scope.present?
  end

  def book
    BookSerializer.new(object.book).as_json
  end

  def author
    UserAuthorSerializer.new(object.author).as_json
  end
end
