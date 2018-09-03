import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';
import {
  loadMessages,
  sendUserMessage,
  sendFileMessage,
  startTyping,
  endTyping,
} from '../../services/SendBird';
import { ChatScene } from '../../navigation/scenes';
import { navigate } from '../../navigation';
import * as TYPES from './types';
import { toggleLoading, setError } from '../common/actions';
import { setMessage, loadMessagesFinish, setTypers } from './actions';
import {
  currentChannelSelector,
  currentOnlineMessageSelector,
} from '../selectors';

function* sendMessageWorker(action) {
  try {
    const channel = yield select(currentChannelSelector);
    let message;
    if (action.type === TYPES.SEND_TEXT_MESSAGE) {
      message = yield call(sendUserMessage, channel, action.payload);
    } else if (action.type === TYPES.SEND_FILE_MESSAGE) {
      const {
        sourceURL, filename, mime, size,
      } = action.payload;
      // console.log(action.payload);
      message = yield call(
        sendFileMessage,
        channel,
        sourceURL,
        filename,
        mime,
        size,
      );
    }
    yield put(setMessage(message));
  } catch (err) {
    console.log(err);
  }
}

function* receiveMessageWorker(action) {
  try {
    const { receivedChannel, message } = action.payload;
    const currentChannel = yield select(currentChannelSelector);
    if (currentChannel === receivedChannel) {
      yield put(setMessage(message));
    }
  } catch (err) {
    console.log(err);
  }
}

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

function* typingStatusWorker(action) {
  try {
    if (action.type === TYPES.START_TYPING) {
      yield call(startTyping, action.payload);
    } else {
      yield call(endTyping, action.payload);
    }
  } catch (err) {
    console.log(err);
  }
}

function* changeTypingStatusWorker(action) {
  try {
    const currentChannel = yield select(currentChannelSelector);
    const { channel, typers } = action.payload;
    if (currentChannel === channel) {
      yield put(setTypers(typers));
    }
  } catch (err) {
    console.log(err);
  }
}

export default function* sagas() {
  yield takeEvery(TYPES.SEND_TEXT_MESSAGE, sendMessageWorker);
  yield takeEvery(TYPES.SEND_FILE_MESSAGE, sendMessageWorker);
  yield takeEvery(TYPES.RECEIVE_MESSAGE, receiveMessageWorker);
  yield takeEvery(TYPES.LOAD_MESSAGES_START, loadMessagesWorker);
  yield takeEvery(TYPES.START_TYPING, typingStatusWorker);
  yield takeEvery(TYPES.END_TYPING, typingStatusWorker);
  yield takeEvery(TYPES.CHANGE_TYPING_STATUS, changeTypingStatusWorker);
}
