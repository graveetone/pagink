class BaseSerializer < ActiveModel::Serializer
  include ActionView::Helpers::DateHelper

  def timestamp
    "#{time_ago_in_words(object.created_at)} ago"
  end
end
