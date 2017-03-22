import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BoardReducer from './board_reducer';
import MessageReducer from './message_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  boards: BoardReducer,
  messages: MessageReducer
});

export default rootReducer;
