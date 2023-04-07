class ShelveSerializer < ActiveModel::Serializer
  attributes %i[id title author books is_private created_at]
end
