import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  user: null,
  channels: [],
  currentChannel: null,
};

const setUser = (state, { user }) => ({ ...state, user });
const setChannels = (state, channels) => ({ ...state, channels });
const setCurrentChannel = (state, channel) => ({
  ...state,
  currentChannel: channel,
});

const handlers = {
  [TYPES.SET_USER]: setUser,
  [TYPES.SET_CHANNELS]: setChannels,
  [TYPES.SET_CURRENT_CHANNEL]: setCurrentChannel,
};

export default createReducer(initialState, handlers);
