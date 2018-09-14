// @flow

import { all, fork } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';

import authSaga from './auth';
import userSaga from './user';
import itemSaga from './item';
import tagSaga from './tag';
import notificationSaga from './notification';

function* mySaga(): Saga<void> {
  yield all([
    fork(authSaga),
    fork(userSaga),
    fork(itemSaga),
    fork(tagSaga),
    fork(notificationSaga),
  ]);
}

export default mySaga;
