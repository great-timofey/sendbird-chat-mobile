import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  users: [],
  searching: false,
  successful: false,
};

const setUsers = (state, users) => ({ ...state, users });

const startSearching = () => ({
  ...initialState,
  searching: true,
});

const unsetUsers = () => initialState;

const setSearchResult = (state, result) => ({
  ...state,
  searching: false,
  successful: result === 'success',
});

const handlers = {
  [TYPES.SEARCH_START]: startSearching,
  [TYPES.SET_USERS]: setUsers,
  [TYPES.UNSET_USERS]: unsetUsers,
  [TYPES.SET_SEARCH_RESULT]: setSearchResult,
};

export default createReducer(initialState, handlers);
