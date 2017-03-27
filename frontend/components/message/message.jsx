import React from 'react';
import { Link, hashHistory } from 'react-router';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.generateMessages = this.generateMessages.bind(this);
    this.updateScroll = this.updateScroll.bind(this);
  }

  componentWillMount() {
    this.props.getCurrentUser().then((res) => {
      this.props.getBoards().then((res) => {
        this.props.getMessages(this.props.board_id)
        App.channel = App.cable.subscriptions.create({
           channel: "RoomChannel",
           board_id: this.props.board_id
         }, {
           received: data => {
              console.log(data)
            }
         });
      })
    });
  }

  componentDidUpdate() {
    this.updateScroll();
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
      
      // let ul = document.getElementsByClassName("messages")[0];
      // let li = document.createElement("li");
      // li.className = "message_list_item";
      // li.appendChild(document.createTextNode(`${this.props.currentUser.name}: ${e.target.value}`));
      // ul.appendChild(li);
      // e.target.value = "";

      this.updateScroll();
      this.props.createMessage(message);
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

  updateScroll() {
    let ul = document.getElementsByClassName("messages")[0];
    ul.scrollTop = ul.scrollHeight;
  }

  render() {

    let messages = this.generateMessages();
    let messageList = []
    messages.forEach((message) => {
      let listItem = <li className="message_list_item" key={message.id}>{message.user_name}: {message.post}</li>
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
