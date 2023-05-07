class Api::V1::LikesController < ApplicationController
  before_action :authenticate_user!

  def like
    @like = Like.find_or_create_by(
      likeable_id: params[:likeable_id],
      likeable_type: params[:likeable_type],
      user: current_user
    )

    render json: @like.likeable
  end

  def unlike
    Like.find_by(
      user: current_user,
      likeable_id: params[:likeable_id],
      likeable_type: params[:likeable_type]
    )&.destroy

    render json: {}
  end
end
