class Api::V1::ShelvesController < ApplicationController
  def index
    @shelves = Shelve.all

    render json: @shelves
  end

  def show
    @shelve = Shelve.find(params[:id])

    render json: @shelve
  end
end
