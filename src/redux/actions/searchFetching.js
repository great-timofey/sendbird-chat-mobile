export const REQUEST_SEARCH_API = 'REQUEST_SEARCH_API';
export const RECEIVE_SEARCH_API = 'RECEIVE_SEARCH_API';
export const CLEAR_SEARCH_API = 'CLEAR_SEARCH_API';

export const requestSearchApi = text => ({ type: REQUEST_SEARCH_API, text });
export const receiveSearchApi = data => ({ type: RECEIVE_SEARCH_API, data });
export const clearSearchApi = () => ({ type: CLEAR_SEARCH_API });

