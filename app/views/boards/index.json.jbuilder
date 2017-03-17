@boards.each do |board|
  json.set! board.name do
    json.id board.id
    json.name board.name
    json.image_url board.image_url
  end
end
