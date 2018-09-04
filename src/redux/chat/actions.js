import * as TYPES from './types';

export const sendTextMessage = message => ({
  type: TYPES.SEND_TEXT_MESSAGE,
  payload: message,
});

export const sendFileMessage = message => ({
  type: TYPES.SEND_FILE_MESSAGE,
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

export const startTyping = channel => ({
  type: TYPES.START_TYPING,
  payload: channel,
});

export const endTyping = channel => ({
  type: TYPES.END_TYPING,
  payload: channel,
});

export const changeTypingStatus = (channel, typers) => ({
  type: TYPES.CHANGE_TYPING_STATUS,
  payload: { channel, typers },
});

export const setTypers = typers => ({
  type: TYPES.SET_TYPERS,
  payload: typers,
});

export const fileUploadStart = () => ({
  type: TYPES.FILE_UPLOAD_START,
});

export const fileUploadFinish = () => ({
  type: TYPES.FILE_UPLOAD_FINISH,
});

export const setFileUploadProgress = progress => ({
  type: TYPES.SET_FILE_UPLOAD_PROGRESS,
  payload: progress,
});
