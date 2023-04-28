# frozen_string_literal: true

# Serializes Author objects to JSON format.
class AuthorSerializer < ActiveModel::Serializer
  attributes %i[id name image_url books]

  def image_url
    object.image_link&.url
  end

  def books
    ActiveModel::Serializer::CollectionSerializer.new(
      object.books,
      serializer: BookOfAuthorSerializer
    )
    
  end
end
