import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  searchStart,
  searchSuccess,
  searchFinish,
  searchFailure,
  setUsers,
} from './actions';
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
      console.log(data);
      if (Array.isArray(data) && data.length === 0) {
        yield put(setUsers([]));
        yield put(searchFailure());
      } else {
        yield put(setUsers(data));
        yield put(searchSuccess());
      }
    }
    yield put(searchFinish());
  } catch (err) {
    yield put(searchFailure());
    yield put(searchFinish());
    console.log(err);
  }
}

export default function* () {
  yield takeLatest(TYPES.FIND_USERS, searchUserWorker);
}
