import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { searchStart, setSearchResult, setUsers } from './actions';
import { currentUserSelector } from '../selectors';
import { searchUser } from './requests';
import * as TYPES from './types';

function* searchUserWorker(action) {
  try {
    yield delay(500);
    yield put(searchStart());
    const { token } = yield select(currentUserSelector);
    if (action.payload) {
      const { data } = yield call(searchUser, action.payload, token);
      if (Array.isArray(data) && data.length === 0) {
        yield put(setSearchResult('failure'));
      } else {
        yield put(setUsers(data));
        yield put(setSearchResult('success'));
      }
    }
  } catch (err) {
    yield put(setSearchResult('failure'));
    console.log(err);
  }
}

export default function* () {
  yield takeLatest(TYPES.FIND_USERS, searchUserWorker);
}
