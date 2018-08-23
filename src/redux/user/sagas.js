import { call, put, takeEvery } from 'redux-saga/effects';
import { SBconnect } from '../../services/SendBird';
import { loginUser, registerUser } from './requests';
import {
  setUser,
  connectionCheckingStart,
  connectionCheckingSuccess,
  connectionCheckingFinish,
  connectionCheckingFailure,
} from './actions';
import * as TYPES from './types';

function* fetchUserWorker(action) {
  try {
    yield put(connectionCheckingStart());
    const { username, email, password } = action.payload;
    const { data } = yield call(loginUser, username, email, password);
    const { sbUserId, sbAccessToken } = data;
    yield call(SBconnect, sbUserId, sbAccessToken);
    yield put(setUser({ ...data }));
    yield put(connectionCheckingSuccess());
    yield put(connectionCheckingFinish());
  } catch (err) {
    const { error } = err.response.data;
    console.log(error);
    yield put(connectionCheckingFailure(error));
    yield put(connectionCheckingFinish());
    console.log(err);
  }
}

function* addUserWorker(action) {
  try {
    yield put(connectionCheckingStart());
    const { username, email, password } = action.payload;
    console.log(username, email, password);
    const { data } = yield call(registerUser, username, email, password);
    console.log(data);
    const { sbUserId, sbAccessToken } = data;
    yield call(SBconnect, sbUserId, sbAccessToken);
    yield put(setUser({ ...data }));
    yield put(connectionCheckingSuccess());
    yield put(connectionCheckingFinish());
  } catch (err) {
    const { error } = err.response.data;
    console.log(error);
    yield put(connectionCheckingFailure(error));
    yield put(connectionCheckingFinish());
    console.log(err);
  }
}

export function* sagas() {
  yield takeEvery(TYPES.FETCH_USER, fetchUserWorker);
  yield takeEvery(TYPES.CREATE_USER, addUserWorker);
}
