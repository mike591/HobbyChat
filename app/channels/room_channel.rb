class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel_#{params[:board_id]}"
  end
end

# http://www.thegreatcodeadventure.com/rails-5-action-cable-with-multiple-chatroom-subscriptions/
