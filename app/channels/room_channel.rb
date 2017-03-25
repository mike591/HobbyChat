class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel_#{params[:board_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    message = data['message']
    Message.create!(post: message['post'], user_id: message['user_id'], board_id: message['board_id'])

    ActionCable.server.broadcast "room_channel_#{message['board_id']}", message: message['post']
  end
end

# http://www.thegreatcodeadventure.com/rails-5-action-cable-with-multiple-chatroom-subscriptions/
