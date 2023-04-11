class Api::V1::GinksController < ApplicationController
  def index
    @ginks = Gink.all

    render json: @ginks
  end

  def show
    @gink = Gink.find(params[:id])

    render json: @gink
  end
end
