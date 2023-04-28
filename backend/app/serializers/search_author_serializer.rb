class SearchAuthorSerializer < ActiveModel::Serializer
  attributes %i[id name image_url]

  def image_url
    object.image_link&.url
  end
end
