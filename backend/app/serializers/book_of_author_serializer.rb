class BookOfAuthorSerializer < ActiveModel::Serializer
  attributes %i[id title image_url created_at]

  def image_url
    object.image_link.url
  end
end
