class NotificationSerializer < ActiveModel::Serializer
  attributes %i[id title payload created_at]
end
