import * as TYPES from './types';

export const fetchUser = (username, email, password) => ({
  type: TYPES.FETCH_USER,
  payload: { username, email, password },
});

export const createUser = (username, email, password) => ({
  type: TYPES.CREATE_USER,
  payload: { username, email, password },
});

export const setUser = user => ({
  type: TYPES.SET_USER,
  payload: { user },
});

export const addChannel = channel => ({
  type: TYPES.ADD_CHANNEL,
  payload: channel,
});

export const setChannels = channels => ({
  type: TYPES.SET_CHANNELS,
  payload: channels,
});

export const setCurrentChannel = channel => ({
  type: TYPES.SET_CURRENT_CHANNEL,
  payload: channel,
});

export const enterChannel = (url, type) => ({
  type: TYPES.ENTER_CHANNEL,
  payload: { url, type },
});

export const createChannel = (
  channelType,
  channelName,
  inviterId,
  inviteeId,
) => ({
  type: TYPES.CREATE_CHANNEL,
  payload: {
    channelType,
    channelName,
    inviterId,
    inviteeId,
  },
});

export const inviteUser = user => ({
  type: TYPES.INVITE_USER,
  payload: user
});
