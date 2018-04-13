import { RECEIVE_SEARCH_API, REQUEST_SEARCH_API, CLEAR_SEARCH_API } from '../actions/searchFetching';

const initialState = {
  data: [],
  searchInput: ''
};

export default (state = initialState, { type, data, text }) => {
  switch (type) {
    case RECEIVE_SEARCH_API:
      return {
        ...state,
        data
      };
    case REQUEST_SEARCH_API:
      return {
        ...state,
        searchInput: text,
      };
    case CLEAR_SEARCH_API:
      return {
        data: [],
        searchInput: ''
      };
    default:
      return state;
  }
};
