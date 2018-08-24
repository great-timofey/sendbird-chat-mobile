import { fork } from 'redux-saga/effects';
import userSaga from './user/sagas';
import chatSaga from './chat/sagas';

export default function* () {
  yield fork(userSaga);
  yield fork(chatSaga);
}
