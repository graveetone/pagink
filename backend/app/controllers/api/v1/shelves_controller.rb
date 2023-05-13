class Api::V1::ShelvesController < ApplicationController
  def index
    @shelves = Shelve.all

    render json: @shelves
  end

  def show
    @shelve = Shelve.find(params[:id])

    render json: @shelve
  end

  def create
    @shelve = Shelve.find_or_create_by(
      author_id: current_user.id,
      title: params[:title]
    )

    render json: @shelve
  end
end
