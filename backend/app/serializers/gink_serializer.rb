class GinkSerializer < ActiveModel::Serializer
  attributes %i[id title text author likes_count comments created_at]

  def likes_count
    object.likes.count
  end

  def comments
    ActiveModel::Serializer::CollectionSerializer.new(
      object.comments,
      serializer: CommentSerializer
    )
  end
end
