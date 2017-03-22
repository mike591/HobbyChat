import { SET_MESSAGES, ADD_MESSAGE } from '../actions/message_actions';

const MessageReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case SET_MESSAGES:
      return messages;
    case ADD_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
};

export default MessageReducer;
