import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  user: null,
};

const setUser = (_, { user }) => ({ user });

const handlers = {
  [TYPES.SET_USER]: setUser,
};

export default createReducer(initialState, handlers);
