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

export const connectionCheckingStart = () => ({
  type: TYPES.CONNECTION_CHECKING_START,
});

export const connectionCheckingSuccess = () => ({
  type: TYPES.CONNECTION_CHECKING_SUCCESS,
});

export const connectionCheckingFailure = error => ({
  type: TYPES.CONNECTION_CHECKING_FAILURE,
  payload: error,
});

export const connectionCheckingFinish = () => ({
  type: TYPES.CONNECTION_CHECKING_FINISH,
});
