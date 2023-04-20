# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  include RackSessionFix
  include ActionController::Serialization

  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email])
  end

  private

  def respond_with(resource, _options = {})
    if resource.persisted?
      render json: {
        status: {
          code: 200,
          message: 'Signed up successfully'
        },
        data: UserSerializer.new(resource).as_json
      }, status: :ok
    else
      render json: {
        status: {
          code: 422,
          message: "User is unable to register #{resource.errors.full_messages}"
        }
      }, status: :unprocessable_entity
    end
  end
end
