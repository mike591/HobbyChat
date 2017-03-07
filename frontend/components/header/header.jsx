import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout()
  }


  render() {
    return(
      <div>
        <h1>Welcome to Headers</h1>
        <button onClick={this.logout}>Log Out</button>
      </div>
    )
  }
}

export default Header;
