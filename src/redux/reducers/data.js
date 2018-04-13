import { RECEIVE_API_DATA, SET_REFRESHING } from '../actions/fetching';

const initialState = {
  data: [],
  refreshing: false
};

export default (state = initialState, { type, data, refreshing }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return {
        ...state,
        data
      };
    case SET_REFRESHING:
      return {
        ...state,
        refreshing
      };
    default:
      return state;
  }
};
