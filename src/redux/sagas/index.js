import { put, call, fork, select } from 'redux-saga/effects';
import { takeLatest, takeEvery, delay } from 'redux-saga';
import { REQUEST_API_DATA, receiveApiData, setRefreshing } from '../actions/fetching';
import { REQUEST_SEARCH_API, clearSearchApi, receiveSearchApi } from '../actions/searchFetching';
import fetchData from '../api';
import searchData from '../search';


function* startup(action) {

}

const peelData = data => (data.results.map(result => (
  {
    title: result.title,
    id: result.id,
    overview: result.overview,
    poster_path: result.poster_path,
  })));

function* getApiData() {
  console.log('GET');
  try {
    // do api call
    yield put(setRefreshing(true));
    const data = yield call(fetchData);
    if (data && data.results !== null) {
      yield put(receiveApiData(peelData(data)));
      yield put(setRefreshing(false));
    }
  } catch (e) {
    console.log(e);
  }
}

function* searchApiData({ text }) {
  if (text === '') {
    yield put(clearSearchApi());
    return;
  }
  try {
    yield delay(500);
    const data = yield call(searchData, text);
    if (data && data.results !== null) {
      yield put(receiveSearchApi(peelData(data)));
    }
  } catch (e) {
    console.log(e);
  }
}


export default function* mySaga() {
  yield fork(getApiData);
  yield takeLatest(REQUEST_API_DATA, getApiData);
  yield takeLatest(REQUEST_SEARCH_API, searchApiData);  
}
