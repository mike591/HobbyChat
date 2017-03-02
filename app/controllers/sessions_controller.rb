class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    render json: {username: user.name}
    # redirect_to root_path
  end

  def destroy
    session[:user_id] = nil
    render json: nil
    # redirect_to root_path
  end
end
