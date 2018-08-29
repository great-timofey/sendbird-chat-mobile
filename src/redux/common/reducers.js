import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  loading: false,
  error: null,
  currentOnlineMessage: '',
};

const toggleLoading = state => ({ ...state, loading: !state.loading });
const setError = (state, error) => ({ ...state, error });
const setCurrentOnlineMessage = (state, message) => ({
  ...state,
  currentOnlineMessage: message,
});

const handlers = {
  [TYPES.TOGGLE_LOADING]: toggleLoading,
  [TYPES.SET_CURRENT_ONLINE_MESSAGE]: setCurrentOnlineMessage,
  [TYPES.SET_ERROR]: setError,
};

export default createReducer(initialState, handlers);
