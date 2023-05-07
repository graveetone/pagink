class GinkSerializer < BaseSerializer
  attributes %i[id title text author likedByCurrentUser likesCount timestamp commentsCount type]
  def type
    :gink
  end

  def commentsCount
    object.comments.count
  end

  def likedByCurrentUser
    object.likes.find_by(user: scope).present? if scope.present?
  end

  def likesCount
    object.likes.count
  end

  def author
    UserAuthorSerializer.new(object.author).as_json
  end
end
