class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.all

    render json: @users
  end

  def show
    if current_user.id == params[:id].to_i
      @user = User.find(params[:id])

      render json: @user
    else
      render json: {
        status: {
          code: 403,
          message: 'You are not allowed to see this user data'
        }
      }, status: 403
    end
  end
end
