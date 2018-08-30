import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';
import { loadMessages } from '../../services/SendBird';
import { ChatScene } from '../../navigation/scenes';
import { navigate } from '../../navigation';
import * as TYPES from './types';
import { toggleLoading, setError } from '../common/actions';
import { loadMessagesFinish } from './actions';
import {
  currentChannelSelector,
  currentOnlineMessageSelector,
} from '../selectors';

function* loadMessagesWorker() {
  try {
    const channel = yield select(currentChannelSelector);
    const userSeenData = yield select(currentOnlineMessageSelector);
    const { name, coverUrl, channelType } = channel;
    const messages = yield call(loadMessages, channel);
    yield put(loadMessagesFinish(messages));
    yield put(toggleLoading());
    yield call(navigate, ChatScene, {
      name,
      channelType,
      coverUrl,
      userSeenData,
    });
  } catch (err) {
    yield put(toggleLoading());
    yield put(setError(err));
    console.log(err);
  }
}

export default function* sagas() {
  yield takeEvery(TYPES.LOAD_MESSAGES_START, loadMessagesWorker);
}
