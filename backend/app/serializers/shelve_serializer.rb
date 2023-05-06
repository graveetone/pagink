class ShelveSerializer < BaseSerializer
  attributes %i[id title author books is_private timestamp]

  def author
    UserAuthorSerializer.new(object.author).as_json
  end

  def books
    ActiveModel::Serializer::CollectionSerializer.new(
      object.books.uniq,
      serializer: BookOfAuthorSerializer
    )
  end
end
