class BroadcastMessageJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast(
      "room_channel_#{message.board_id}", message.post
    )
  end
end
