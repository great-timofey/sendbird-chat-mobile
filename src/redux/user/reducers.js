import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  user: null,
  loading: false,
};

const setUser = (state, { user }) => ({ ...state, user });

const handlers = {
  [TYPES.SET_USER]: setUser,
};

export default createReducer(initialState, handlers);
