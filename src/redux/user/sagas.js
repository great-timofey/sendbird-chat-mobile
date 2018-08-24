import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  SBconnect,
  getChannelsList,
  enterOpenChannel,
  getGroupChannel,
} from '../../services/SendBird';
import { loginUser, registerUser } from './requests';
import { navigate } from '../../navigation';
import { ChatScene } from '../../navigation/scenes';
import * as TYPES from './types';
import { setUser, setChannels, setCurrentChannel } from './actions';
import { toggleLoading, setError } from '../common/actions';
import { loadMessagesStart } from '../chat/actions';

function* fetchUserWorker(action) {
  try {
    yield put(toggleLoading());
    const { username, email, password } = action.payload;
    const { data } = yield call(loginUser, username, email, password);
    const { sbUserId, sbAccessToken } = data;
    yield call(SBconnect, sbUserId, sbAccessToken);
    yield put(setUser({ ...data }));
    const channels = yield call(getChannelsList);
    yield put(setChannels(channels));
    yield put(toggleLoading());
    yield call(navigate, ChatScene);
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
    const { data } = yield call(registerUser, username, email, password);
    const { sbUserId, sbAccessToken } = data;
    yield call(SBconnect, sbUserId, sbAccessToken);
    yield put(setUser({ ...data }));
    yield put(toggleLoading());
    yield call(navigate, ChatScene);
  } catch (err) {
    const { error } = err.response.data;
    yield put(toggleLoading());
    yield put(setError(error));
    console.log(error);
  }
}

function* enterChannelWorker(action) {
  try {
    yield put(toggleLoading());
    const { url, type } = action.payload;
    let channel;
    if (type === 'open') {
      channel = yield call(enterOpenChannel, url);
    } else {
      channel = yield call(getGroupChannel, url);
    }
    console.log(channel);
    yield put(setCurrentChannel(channel));
    yield put(loadMessagesStart());
  } catch (err) {
    yield put(toggleLoading());
    console.log(err);
  }
}

export default function* sagas() {
  yield takeEvery(TYPES.FETCH_USER, fetchUserWorker);
  yield takeEvery(TYPES.CREATE_USER, addUserWorker);
  yield takeLatest(TYPES.ENTER_CHANNEL, enterChannelWorker);
}
