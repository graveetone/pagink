class CommentSerializer < ActiveModel::Serializer
  attributes %i[id author likes_count comments text created_at]

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
