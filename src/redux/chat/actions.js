import * as TYPES from './types';

export const sendTextMessage = message => ({
  type: TYPES.SEND_TEXT_MESSAGE,
  payload: message,
});

export const receiveMessages = () => ({
  type: TYPES.RECEIVE_MESSAGES,
});

export const receiveMessage = (receivedChannel, message) => ({
  type: TYPES.RECEIVE_MESSAGE,
  payload: { receivedChannel, message },
});

export const setMessage = message => ({
  type: TYPES.SET_MESSAGE,
  payload: message,
});

export const loadMessagesStart = () => ({
  type: TYPES.LOAD_MESSAGES_START,
});

export const loadMessagesFinish = messages => ({
  type: TYPES.LOAD_MESSAGES_FINISH,
  payload: messages,
});
