import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initialState = {
  loading: false,
  error: null,
  isMenuOpen: false,
};

const toggleLoading = state => ({ ...state, loading: !state.loading });
const toggleMenu = state => ({ ...state, isMenuOpen: !state.isMenuOpen });
const setError = (state, error) => ({ ...state, error });

const handlers = {
  [TYPES.TOGGLE_LOADING]: toggleLoading,
  [TYPES.TOGGLE_MENU]: toggleMenu,
  [TYPES.SET_ERROR]: setError,
};

export default createReducer(initialState, handlers);
