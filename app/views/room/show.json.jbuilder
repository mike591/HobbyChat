@messages.each do |message|
  json.set! message.id do
    json.id message.id
    json.user_id message.user_id
    json.board_id message.board_id
    json.post message.post
    json.user_name message.user.name
  end
end
