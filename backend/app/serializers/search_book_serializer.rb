class SearchBookSerializer < ActiveModel::Serializer
    attributes %i[id title isbn image_url authors]
  
    def image_url
      object.image_link&.url
    end

    def authors
        ActiveModel::Serializer::CollectionSerializer.new(
          object.authors,
          serializer: SearchAuthorSerializer
        )
      end
  end
  