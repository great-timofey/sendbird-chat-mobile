export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

export const SET_REFRESHING = 'SET_REFRESHING';

export const setRefreshing = refreshing => ({ type: SET_REFRESHING, refreshing });
