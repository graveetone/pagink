class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: %i[show comments]

  def index
    @reviews = Review.all

    render json: @reviews
  end

  def create
    @review = Review.create(
      book_id: params[:bookId],
      author_id: current_user.id,
      text: params[:text]
    )

    render json: @review
  end

  def show
    render json: ReviewSerializer.new(@review, scope: current_user).as_json
  end

  def comments
    comments = @review.comments.order(created_at: :asc)

    render json: {
      comments: serialize_collection(comments, CommentSerializer),
      count: comments.count
    }
  end

  private

  def set_review
    @review = Review.find(params[:id])
  end
end
