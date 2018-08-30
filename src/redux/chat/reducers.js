import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  messages: [],
};

const setMessages = (state, messages) => ({ ...state, messages });

const setMessage = (state, message) => ({
  ...state,
  messages: [message, ...state.messages],
});

const handlers = {
  [TYPES.LOAD_MESSAGES_FINISH]: setMessages,
  [TYPES.SET_MESSAGE]: setMessage,
};

export default createReducer(initialState, handlers);
