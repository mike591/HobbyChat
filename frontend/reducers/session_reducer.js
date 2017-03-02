import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, _defaultState, {currentUser: action.currentUser});
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
