import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser : currentUser
});

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(
      res => dispatch(receiveCurrentUser(null))
    )
);

export const getCurrentUser = () => dispatch => (
  SessionApiUtil.currentUser()
    .then(
      res => dispatch(receiveCurrentUser(res))
    )
);
