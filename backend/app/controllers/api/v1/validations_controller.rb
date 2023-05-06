class Api::V1::ValidationsController < ApplicationController
  def username
    result = if params[:username].empty?
               PaginkErrorBuilder.new(:empty_username).as_json.merge(usernameValid: false)
             elsif User.find_by(username: params[:username])
               PaginkErrorBuilder.new(:username_taken).as_json.merge(usernameValid: false)
             else
               {
                 usernameValid: true
               }
             end
    render json: result
  end

  def email
    result = if params[:email].empty?
               PaginkErrorBuilder.new(:empty_email).as_json.merge(emailValid: false)
             elsif User.find_by(email: params[:email])
               PaginkErrorBuilder.new(:email_taken).as_json.merge(emailValid: false)
             else
               {
                 emailValid: true
               }
             end
    render json: result
  end
end
