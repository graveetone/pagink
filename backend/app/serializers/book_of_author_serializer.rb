class BookOfAuthorSerializer < BaseSerializer
  attributes %i[id authors title image_url]

  def image_url
    object.image_link.url
  end

  def authors
    ActiveModel::Serializer::CollectionSerializer.new(
      object.authors,
      serializer: SearchAuthorSerializer
    )
  end
end
