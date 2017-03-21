import React from 'react';
import { Link, hashHistory } from 'react-router';

class Message extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.getCurrentUser().then((res) => {
      this.props.getBoards()
    });
  }

  render() {

    return (
      <div className="message_page">
        <h1>{this.props.board_name}</h1>
      </div>
    )
  }
}

export default Message;
