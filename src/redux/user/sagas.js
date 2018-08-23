import { call, put, takeEvery } from 'redux-saga/effects';
import { SBconnect } from '../../services/SendBird';
import { loginUser, registerUser } from './requests';
import { navigate } from '../../navigation';
import { ChatScene } from '../../navigation/scenes';
import * as TYPES from './types';
import { setUser } from './actions';
import { toggleLoading, setError } from '../common/actions';

function* fetchUserWorker(action) {
  try {
    yield put(toggleLoading());
    const { username, email, password } = action.payload;
    const { data } = yield call(loginUser, username, email, password);
    const { sbUserId, sbAccessToken } = data;
    yield call(SBconnect, sbUserId, sbAccessToken);
    yield put(setUser({ ...data }));
    yield call(navigate, ChatScene);
    yield put(toggleLoading());
  } catch (err) {
    const { error } = err.response.data;
    yield put(toggleLoading());
    yield put(setError(error));
    console.log(error);
  }
}

function* addUserWorker(action) {
  try {
    yield put(toggleLoading());
    const { username, email, password } = action.payload;
    console.log(username, email, password);
    const { data } = yield call(registerUser, username, email, password);
    console.log(data);
    const { sbUserId, sbAccessToken } = data;
    yield call(SBconnect, sbUserId, sbAccessToken);
    yield put(setUser({ ...data }));
    yield put(toggleLoading());
    yield call(navigate, ChatScene);
  } catch (err) {
    const { error } = err.response.data;
    console.log(error);
    yield put(toggleLoading());
    yield put(setError(error));
  }
}

export function* sagas() {
  yield takeEvery(TYPES.FETCH_USER, fetchUserWorker);
  yield takeEvery(TYPES.CREATE_USER, addUserWorker);
}
