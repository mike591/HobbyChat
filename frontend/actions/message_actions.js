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
