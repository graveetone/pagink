class MessageSerializer < ActiveModel::Serializer
  attributes %i[id text author recipient created_at]
end
