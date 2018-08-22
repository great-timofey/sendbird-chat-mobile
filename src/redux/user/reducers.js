import { createReducer } from '../../utils/createReducer';

const initialState = {
  user: null,
  loading: false,
};

const handlers = {};

export default createReducer(initialState, handlers);
