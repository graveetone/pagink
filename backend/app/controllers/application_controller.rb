class ApplicationController < ActionController::API
  def index
    render 'layouts/application'
  end

  protected

  def serialize_collection(collection, serializer)
    ActiveModel::Serializer::CollectionSerializer.new(
      collection,
      serializer: serializer,
      scope: current_user
    )
  end
end
