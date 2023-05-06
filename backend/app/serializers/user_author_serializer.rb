class UserAuthorSerializer < BaseSerializer
  attributes %i[id username image_url]

  def image_url
    object.image_link&.url
  end
end
