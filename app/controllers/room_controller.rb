class RoomController < ApplicationController
  def show
    @messages = Message.all
    render "show.json.jbuilder"
  end
end
