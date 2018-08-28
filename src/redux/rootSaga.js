import { fork } from 'redux-saga/effects';
import userSaga from './user/sagas';
import chatSaga from './chat/sagas';
import searchSaga from './search/sagas';

export default function* () {
  yield fork(userSaga);
  yield fork(chatSaga);
  yield fork(searchSaga);
}
