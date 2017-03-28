class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    # redirect_to dashboard_url
    redirect_to root_url
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end

  def show_current_user
    @user = current_user
    render "show_current_user.json.jbuilder"
  end
end
