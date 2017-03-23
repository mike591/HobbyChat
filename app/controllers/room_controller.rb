class RoomController < ApplicationController
  def show
    @messages = Message.where("board_id = #{params[:id]}")
    render "show.json.jbuilder"
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      render "message.json.jbuilder"
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private
  def message_params
    params.require(:message).permit(:post, :user_id, :board_id)
  end
end
