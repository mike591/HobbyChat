class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to dashboard_url
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end

  def current_user
    @user = current_user
    render "get_current_user.json.jbuilder"
  end
end
