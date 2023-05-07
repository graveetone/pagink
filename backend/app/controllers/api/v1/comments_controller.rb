class Api::V1::CommentsController < ApplicationController
  def index
    @comments = Comment.all

    render json: @comments
  end

  def create
    @comment = Comment.create(
      author_id: current_user.id,
      text: params[:text],
      commentable_id: params[:commentable_id],
      commentable_type: params[:commentable_type],
      origin_id: params[:origin_id]
    )

    render json: @comment
  end

  def show
    @comment = Comment.find(params[:id])

    render json: CommentSerializer.new(@comment, scope: current_user)
  end
end
