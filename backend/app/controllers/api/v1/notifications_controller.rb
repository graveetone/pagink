class Api::V1::NotificationsController < ApplicationController
  def index
    @notifications = Notification.all

    render json: @notifications
  end

  def show
    @notification = Notification.find(params[:id])

    render json: @notification
  end
end
