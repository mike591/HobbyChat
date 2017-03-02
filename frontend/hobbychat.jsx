import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

import {login} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root')
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // TODO testing
  window.store = store;
  window.login = login;

  ReactDOM.render(<Root store={store} />, root);
});
