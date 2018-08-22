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
