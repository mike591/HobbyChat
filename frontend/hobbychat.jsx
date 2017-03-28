import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("dom loaded");
//   const root = document.getElementById('root')
//   let store = configureStore()
//
//   // TODO testing
//   window.store = store;
//
//   ReactDOM.render(<Root store={store} />, root);
// });

function run() {
  let store = configureStore()
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
