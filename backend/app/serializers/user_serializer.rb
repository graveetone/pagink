class UserSerializer < ActiveModel::Serializer
  attributes %i[id username email status image_url created_at sign_in_count last_sign_in_at]

  def image_url
    object.image_link&.url
  end

  def status
    if object.active?
      object.last_sign_in_at && Time.now - 15.minutes <= object.last_sign_in_at ? 'ONLINE' : 'OFFLINE'
    else
      object.status
    end
  end
end
