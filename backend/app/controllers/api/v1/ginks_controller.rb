class Api::V1::GinksController < ApplicationController
  before_action :set_gink, only: %i[show comments]
  def index
    @ginks = Gink.all

    render json: @ginks
  end

  def create
    @gink = Gink.create(
      author_id: current_user.id,
      text: params[:text],
      title: params[:title]
    )

    render json: @gink
  end

  def comments
    comments = @gink.comments

    render json: {
      comments: serialize_collection(comments, CommentSerializer),
      count: comments.count
    }
  end

  def show
    render json: @gink
  end

  private

  def set_gink
    @gink = Gink.find(params[:id])
  end
end
