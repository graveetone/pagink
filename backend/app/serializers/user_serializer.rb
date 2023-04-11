class UserSerializer < ActiveModel::Serializer
  attributes %i[id username email last_seen status image_url created_at]

  def image_url
    object.image_link.url
  end
end
