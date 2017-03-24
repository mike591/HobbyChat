import React from 'react';
import { Link, hashHistory } from 'react-router';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.generateMessages = this.generateMessages.bind(this);
  }

  componentWillMount() {
    this.props.getCurrentUser().then((res) => {
      this.props.getBoards().then((res) => {
        this.props.getMessages(this.props.board_id)
      })
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
      let ul = document.getElementsByClassName("messages")[0];
      let li = document.createElement("li");
      li.className = "message_list_item";
      li.appendChild(document.createTextNode(e.target.value));
      ul.appendChild(li);
      e.target.value = "";
    }
  }

  generateMessages() {
    let messages = [];
    Object.keys(this.props.messages).forEach((key) => {
      let message = this.props.messages[key];
      messages.push(message);
    })
    return messages;
  }

  render() {

    let messages = this.generateMessages();
    let messageList = []
    messages.forEach((message) => {
      let listItem = <li className="message_list_item" key={message.id}>{message.post}</li>
      messageList.push(listItem)
    })

    return (
      <div className="message_page">
        <h1 className="message_title">{this.props.board_name}</h1>
        <div className="message_box">
          <ul className="messages">
            {messageList}
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
