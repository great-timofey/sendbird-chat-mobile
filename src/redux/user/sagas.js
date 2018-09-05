import { intersection, isEmpty, contains } from 'ramda';
import {
  call, put, takeEvery, takeLatest, select,
} from 'redux-saga/effects';
import {
  SBconnect,
  getChannelsList,
  enterOpenChannel,
  getGroupChannel,
  createOpenChannel,
  createGroupChannel,
  inviteUsersToGroupChannel,
} from '../../services/SendBird';
import { loginUser, registerUser } from './requests';
import {
  currentMembersSelector,
  currentChannelSelector,
  currentChannelParticipantsIds,
} from '../selectors';
import { navigate } from '../../navigation';
import { ChatsScene } from '../../navigation/scenes';
import * as TYPES from './types';
import {
  setUser,
  setChannels,
  setCurrentChannel,
  enterChannel,
  addChannel,
} from './actions';
import { toggleLoading, setError, setSuccessMessage } from '../common/actions';
import { loadMessagesStart, setParticipants } from '../chat/actions';

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
    yield call(navigate, ChatsScene);
  } catch (err) {
    yield put(toggleLoading());
    yield put(setError(err));
    console.log(err);
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
    yield call(navigate, ChatsScene);
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

function* createChannelWorker(action) {
  try {
    yield put(toggleLoading());
    const {
      channelType, channelName, inviterId, inviteeId,
    } = action.payload;
    let channel;
    if (channelType === 'open') {
      channel = yield call(createOpenChannel, channelName);
    } else {
      channel = yield call(
        createGroupChannel,
        [inviterId, inviteeId],
        channelName,
      );
    }
    const { url } = channel;
    yield put(addChannel(channel));
    yield put(setCurrentChannel(channel));
    yield put(toggleLoading());
    yield put(enterChannel(url, channelType));
  } catch (err) {
    console.log(err);
  }
}

export function* inviteUsersWorker(action) {
  try {
    yield put(toggleLoading());
    const channel = yield select(currentChannelSelector);
    const participantsIds = yield select(currentChannelParticipantsIds);
    const compared = intersection(action.payload, participantsIds);
    if (isEmpty(compared)) {
      yield call(inviteUsersToGroupChannel, channel, action.payload);
      const participants = yield select(currentMembersSelector);
      yield put(setParticipants(participants));
      yield put(setSuccessMessage('Users have been successfully invited!'));
    } else {
      const members = yield select(currentMembersSelector);
      const alreadyInChannel = members
        .filter(member => contains(member.userId, compared))
        .map(member => member.nickname);
      yield put(
        setError(
          `${alreadyInChannel.join(', ')} ${
            alreadyInChannel.length > 1 ? 'are' : 'is'
          } already in channel`,
        ),
      );
    }
    yield put(toggleLoading());
  } catch (err) {
    console.log(err);
    yield put(setError(err));
    yield put(toggleLoading());
  }
}

export default function* sagas() {
  yield takeEvery(TYPES.FETCH_USER, fetchUserWorker);
  yield takeEvery(TYPES.CREATE_USER, addUserWorker);
  yield takeLatest(TYPES.ENTER_CHANNEL, enterChannelWorker);
  yield takeEvery(TYPES.CREATE_CHANNEL, createChannelWorker);
  yield takeEvery(TYPES.INVITE_USERS, inviteUsersWorker);
}
