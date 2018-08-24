import * as TYPES from './types';

export const sendMessage = message => ({
  type: TYPES.SEND_MESSAGE,
  payload: message,
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
