class GinkSerializer < BaseSerializer
  attributes %i[id title text author likedBy timestamp commentsCount type]
  def type
    :gink
  end

  def commentsCount
    object.comments.count
  end

  def likedBy
    object.likes.pluck(:user_id)
  end

  def author
    UserAuthorSerializer.new(object.author).as_json
  end
end
