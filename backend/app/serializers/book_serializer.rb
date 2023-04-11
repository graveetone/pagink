class BookSerializer < ActiveModel::Serializer
  attributes %i[id title isbn pages_count description shelves_count image_url average_raiting
                raitings_count created_at]
  has_many :authors

  def shelves_count
    object.shelves.count
  end

  def image_url
    object.image_link.url
  end

  def average_raiting
    object.raitings.average(:value)&.round || 0
  end

  def raitings_count
    object.raitings.count
  end
end
