import * as APIUtils from '../util/api_utils';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

export const setMessages = (messages) => {
  return ({
    type: SET_MESSAGES,
    messages: messages
  });
};

export const addMEssage = (message) => {
  return ({
    type: ADD_MESSAGE,
    message: message
  });
};

export const getMessages = (id) => dispatch => {
  APIUtils.getMessages(id).then(res => dispatch(setMessages));
};
