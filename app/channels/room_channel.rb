class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # ActionCable.server.broadcast 'room_channel', message: data['message']
    message = data['message']
    Message.create!(post: message['post'], user_id: message['user_id'], board_id: message['board_id'])
  end
end
