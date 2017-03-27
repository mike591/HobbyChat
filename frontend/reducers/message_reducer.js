import { SET_MESSAGES, ADD_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';

const MessageReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages;
    case ADD_MESSAGE:
      let m = action.message
      let newMessage = {};
      newMessage = {
        board_id: m.board_id,
        id: m.id,
        post: m.post,
        user_id: m.user_id,
        user_name: m.user.name
      };
      newState = merge({}, state);
      newState[m.id] = newMessage;
      return newState;
    default:
      return state;
  }
};

export default MessageReducer;
