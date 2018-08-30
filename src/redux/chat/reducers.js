import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  messages: [],
  typing: false,
  typers: [],
};

const setMessages = (state, messages) => ({ ...state, messages });

const setMessage = (state, message) => ({
  ...state,
  messages: [message, ...state.messages],
});

const setTypers = (state, typers) => ({ ...state, typers });

const handlers = {
  [TYPES.LOAD_MESSAGES_FINISH]: setMessages,
  [TYPES.SET_MESSAGE]: setMessage,
  [TYPES.SET_TYPERS]: setTypers,
};

export default createReducer(initialState, handlers);
