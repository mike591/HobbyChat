import React from 'react';
import { Link, hashHistory } from 'react-router';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentWillMount() {
    this.props.getCurrentUser().then((res) => {
      this.props.getBoards()
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  };

  handleEnter(e) {
    if (e.keyCode == 13) {
      let message = {
        post: e.target.value,
        user_id: this.props.currentUser.id,
        board_id: this.props.board_id
      }
      App.room.speak(message);
      e.target.value = "";
    }
  }

  render() {

    return (
      <div className="message_page">
        <h1 className="message_title">{this.props.board_name}</h1>
        <div className="message_box">
          <ul className="messages">
            <li>Test</li>
            <li>Hello World</li>
            <li>Test Test Test Test</li>
          </ul>
          <form className="message_text_box" onSubmit={this.handleSubmit}>
            <input type="text" onKeyUp={this.handleEnter} />
          </form>
        </div>
      </div>
    )
  }
}

export default Message;
