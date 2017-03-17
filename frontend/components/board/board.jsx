import React from 'react';
import { Link, hashHistory } from 'react-router';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: []
    }

    this.getBoardList = this.getBoardList.bind(this);
  }

  componentWillMount() {
    this.props.getCurrentUser().then((res) => {
      this.props.getBoards().then((res) => {
        let boards_list = this.getBoardList();
        this.setState({boards: boards_list});
      })
    });
  }

  getBoardList() {
    let boards = [];
    Object.keys(this.props.boards).forEach((key) => {
      let board = this.props.boards[key];
      boards.push(
        <li className="board_tile_item" key={board.id}>{board.name}</li>
      )
    })
    return boards
  }

  render() {

    return(
      <div className="board_page">
        <h1 className="board_title">Welcome to Boards</h1>
        <ul className="board_tile_list">
          {this.state.boards}
        </ul>
      </div>
    )
  }
}

export default Board;
