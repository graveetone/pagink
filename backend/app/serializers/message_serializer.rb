class MessageSerializer < BaseSerializer
  attributes %i[id text author recipient timestamp]
end
