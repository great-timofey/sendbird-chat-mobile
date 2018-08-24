import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';
import { loadMessages } from '../../services/SendBird';
import * as TYPES from './types';
import { toggleLoading, toggleMenu, setError } from '../common/actions';
import { loadMessagesFinish } from './actions';
import { currentChannelSelector } from '../selectors';

function* loadMessagesWorker() {
  try {
    const channel = yield select(currentChannelSelector);
    const messages = yield call(loadMessages, channel);
    yield put(loadMessagesFinish(messages));
    yield put(toggleLoading());
    yield put(toggleMenu());
  } catch (err) {
    const { error } = err.response.data;
    yield put(toggleLoading());
    yield put(setError(error));
    console.log(error);
  }
}

export default function* sagas() {
  yield takeEvery(TYPES.LOAD_MESSAGES_START, loadMessagesWorker);
}
