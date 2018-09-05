import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  loading: false,
  error: null,
  currentOnlineMessage: '',
  successMessage: ''
};

const toggleLoading = state => ({ ...state, loading: !state.loading });
const setError = (state, error) => ({ ...state, error });
const unsetError = (state) => ({ ...state, error: null });
const setCurrentOnlineMessage = (state, message) => ({
  ...state,
  currentOnlineMessage: message,
});
const setSuccessMessage = (state, successMessage) => ({ ...state, successMessage });
const unsetSuccessMessage = (state) => ({ ...state, successMessage: '' });

const handlers = {
  [TYPES.TOGGLE_LOADING]: toggleLoading,
  [TYPES.SET_CURRENT_ONLINE_MESSAGE]: setCurrentOnlineMessage,
  [TYPES.SET_SUCCESS_MESSAGE]: setSuccessMessage,
  [TYPES.UNSET_SUCCESS_MESSAGE]: unsetSuccessMessage,
  [TYPES.SET_ERROR]: setError,
  [TYPES.UNSET_ERROR]: unsetError,
};

export default createReducer(initialState, handlers);
