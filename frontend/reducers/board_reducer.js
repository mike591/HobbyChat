import {RECEIVE_BOARDS} from '../actions/board_actions';


const _defaultState = {
  boards: null
};

const BoardReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BOARDS:
      newState = action.boards;
      return newState;
    default:
      return state;
  }
};

export default BoardReducer;
