import React from 'react';
import { Link, hashHistory } from 'react-router';

class Message extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="message_page">
        <h1>Message goes here!</h1>
      </div>
    )
  }
}

export default Message;
