class UserSerializer < ActiveModel::Serializer
  attributes %i[id username email status image_url created_at sign_in_count last_sign_in_at]

  def image_url
    object.image_link&.url
  end
end
