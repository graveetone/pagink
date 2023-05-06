class ReviewOfBookSerializer < BaseSerializer
  attributes %i[id text commentsCount timestamp likedBy book author type]
  def type
    'Review'
  end

  def commentsCount
    object.comments.count
  end

  def likedBy
    object.likes.pluck(:user_id)
  end

  def book
    BookSerializer.new(object.book).as_json
  end

  def author
    UserAuthorSerializer.new(object.author).as_json
  end
end
