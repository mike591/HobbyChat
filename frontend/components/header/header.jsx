import React from 'react';
import { Link, hashHistory } from 'react-router';

const SIGN_IN_PAGE = "http://localhost:3000/"

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout()
      .then(res => {window.location.href = `${SIGN_IN_PAGE}`});
  }


  render() {
    return(
      <div className="header">
        <h1 className="header_title">HobbyChat</h1>
        <button className="logout_button" onClick={this.logout}>Log Out</button>
      </div>
    )
  }
}

export default Header;
