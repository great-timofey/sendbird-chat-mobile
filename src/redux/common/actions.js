import * as TYPES from './types';

export const toggleLoading = () => ({
  type: TYPES.TOGGLE_LOADING,
});

export const setCurrentOnlineMessage = message => ({
  type: TYPES.SET_CURRENT_ONLINE_MESSAGE,
  payload: message,
});

export const setSuccessMessage = message => ({
  type: TYPES.SET_SUCCESS_MESSAGE,
  payload: message,
});

export const unsetSuccessMessage = () => ({
  type: TYPES.UNSET_SUCCESS_MESSAGE,
});

export const setError = error => ({
  type: TYPES.SET_ERROR,
  payload: error,
});

export const unsetError = () => ({
  type: TYPES.UNSET_ERROR,
});
