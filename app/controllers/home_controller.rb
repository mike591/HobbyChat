class HomeController < ApplicationController
  def show
    if logged_in?
      redirect_to dashboard_url
    else
      render :show
    end
  end
end
