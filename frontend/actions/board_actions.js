import * as APIUtils from '../util/api_utils';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";

// sync
const receiveBoards = (boards) => ({
  type: RECEIVE_BOARDS,
  boards : boards
});

// async
export const boards = () => dispatch => (
  APIUtils.boards()
    .then(
      res => dispatch(receiveBoards(res))
    )
);
