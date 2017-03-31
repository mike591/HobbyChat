import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.returnToDashboard = this.returnToDashboard.bind(this);
  }

  logout() {
    this.props.logout()
      .then(res => {window.location.reload()});
  }

  returnToDashboard() {
    hashHistory.push('/');
  }


  render() {
    return(
      <div className="header">
        <h1 onClick={this.returnToDashboard} className="header_title">HobbyChat</h1>
        <button className="logout_button" onClick={this.logout}>Log Out</button>
      </div>
    )
  }
}

export default Header;
