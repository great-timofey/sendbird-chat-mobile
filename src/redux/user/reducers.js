import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  user: null,
  channels: [],
  currentChannel: null
};

const setUser = (state, { user }) => ({ ...state, user });
const setChannels = (state, channels) => ({ ...state, channels });

const handlers = {
  [TYPES.SET_USER]: setUser,
  [TYPES.SET_CHANNELS]: setChannels,
};

export default createReducer(initialState, handlers);
