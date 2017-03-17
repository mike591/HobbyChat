class BoardsController < ApplicationController
  def index
    @boards = Board.all
    render "index.json.jbuilder"
  end
end
