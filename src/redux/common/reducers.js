import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  loading: false,
  error: null,
};

const toggleLoading = state => ({ ...state, loading: !state.loading });
const setError = (state, error) => ({ ...state, error });

const handlers = {
  [TYPES.TOGGLE_LOADING]: toggleLoading,
  [TYPES.SET_ERROR]: setError,
};

export default createReducer(initialState, handlers);
