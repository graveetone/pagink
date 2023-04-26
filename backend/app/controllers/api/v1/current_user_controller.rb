class Api::V1::CurrentUserController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: {
      user: UserSerializer.new(current_user)
    }, status: :ok
  end
end
