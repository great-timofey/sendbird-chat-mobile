import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  messages: [],
  typing: false,
  typers: [],
};

const setMessages = (state, messages) => ({ ...state, messages });

const setMessage = (state, message) => {
  if (state.messages.includes(1)) {
    const newMessages = state.messages
      .slice(0, state.messages.indexOf(1))
      .concat(state.messages.slice(state.messages.indexOf(1) + 1));
    return { ...state, messages: [message, ...newMessages] };
  }
  return { ...state, messages: [message, ...state.messages] };
};

const setTypers = (state, typers) => {
  if (typers.length) {
    return { ...state, typers, messages: [1, ...state.messages] };
  }
  return { ...state, typers, messages: state.messages.slice(1) };
};

const handlers = {
  [TYPES.LOAD_MESSAGES_FINISH]: setMessages,
  [TYPES.SET_MESSAGE]: setMessage,
  [TYPES.SET_TYPERS]: setTypers,
};

export default createReducer(initialState, handlers);
