import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const setUser = (state, { user }) => ({ ...state, user });
const startLoading = state => ({ ...state, loading: true });
const finishLoading = state => ({ ...state, loading: false });
const loadingFailure = (_, error) => ({ ...initialState, error });

const handlers = {
  [TYPES.SET_USER]: setUser,
  [TYPES.CONNECTION_CHECKING_START]: startLoading,
  [TYPES.CONNECTION_CHECKING_FINISH]: finishLoading,
  [TYPES.CONNECTION_CHECKING_FAILURE]: loadingFailure,
};

export default createReducer(initialState, handlers);
