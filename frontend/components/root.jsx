import React from 'react';
import { Provider } from 'react-redux';
import { Link, Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'
import BoardContainer from './board/board_container'
import MessageContainer from './message/message_container'

const Root = ({ store }) => {
  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ BoardContainer } ></IndexRoute>
        <Route path=":board_id" component={ MessageContainer }></Route>
      </Route>
    </Router>
  </Provider>
)};

export default Root;
