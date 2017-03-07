import React from 'react';
import { Link, hashHistory } from 'react-router';
import HeaderContainer from '../header/header_container'

class Board extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return(
      <div>
        <HeaderContainer />
        <h1>Welcome to Boards</h1>
      </div>
    )
  }
}

export default Board;
