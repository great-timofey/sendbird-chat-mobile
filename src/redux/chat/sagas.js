import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';
import { loadMessages } from '../../services/SendBird';
// import { loginUser, registerUser } from './requests';
import * as TYPES from './types';
import { toggleLoading } from '../common/actions';
import { loadMessagesFinish } from './actions';
import { currentChannelSelector } from '../selectors';

function* loadMessagesWorker() {
  try {
    const channel = yield select(currentChannelSelector);
    const messages = yield call(loadMessages, channel);
    yield put(loadMessagesFinish(messages));
    yield put(toggleLoading());
  } catch (err) {
    console.log(err);
  }
}

export default function* sagas() {
  yield takeEvery(TYPES.LOAD_MESSAGES_START, loadMessagesWorker);
}
