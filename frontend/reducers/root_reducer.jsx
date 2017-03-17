import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BoardReducer from './board_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  boards: BoardReducer
});

export default rootReducer;
