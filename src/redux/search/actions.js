import * as TYPES from './types';

export const findUsers = query => ({
  type: TYPES.FIND_USERS,
  payload: query,
});

export const setUsers = users => ({
  type: TYPES.SET_USERS,
  payload: users,
});

export const unsetUsers = () => ({
  type: TYPES.UNSET_USERS,
});

export const searchStart = () => ({
  type: TYPES.SEARCH_START,
});

export const setSearchResult = result => ({
  type: TYPES.SET_SEARCH_RESULT,
  payload: result,
});
