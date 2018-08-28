import * as TYPES from './types';

export const toggleLoading = () => ({
  type: TYPES.TOGGLE_LOADING,
});

export const setError = error => ({
  type: TYPES.SET_ERROR,
  payload: error,
});
