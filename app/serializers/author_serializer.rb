# frozen_string_literal: true

# Serializes Author objects to JSON format.
class AuthorSerializer < ActiveModel::Serializer
  attributes %i[id name image_url]

  def image_url
    object.image_link.url
  end
end
