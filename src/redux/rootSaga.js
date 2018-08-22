import { fork } from 'redux-saga/effects';
import { sagas as userSaga } from './user/sagas';

export default function* () {
  yield fork(userSaga);
}
