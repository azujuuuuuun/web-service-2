// @flow

import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';

import {
  fetchTagRequested,
  fetchTagSucceeded,
  fetchTagFailed,
  fetchTagsRequested,
  fetchTagsSucceeded,
  fetchTagsFailed,
  followTagRequested,
  followTagSucceeded,
  followTagFailed,
  unfollowTagRequested,
  unfollowTagSucceeded,
  unfollowTagFailed,
  fetchTagRankingRequested,
  fetchTagRankingSucceeded,
  fetchTagRankingFailed,
} from '../actions';

const Api = {
  fetchTag: async tagName => {
    try {
      const res = await axios({
        method: 'get',
        url: `/api/tags/${tagName}`,
      });
      const { data } = res;
      const { tag } = data;
      return { tag };
    } catch (err) {
      console.log(err); // eslint-disable-line no-console
      return { err };
    }
  },
  fetchTags: async () => {
    try {
      const res = await axios({
        method: 'get',
        url: '/api/tags',
      });
      const { data } = res;
      const { tags } = data;
      return { tags };
    } catch (err) {
      console.log(err); // eslint-disable-line no-console
      return { err };
    }
  },
  followTag: async tagId => {
    const token = localStorage.getItem('token');
    if (!token) {
      return { err: 'Token was not found.' };
    }
    try {
      const res = await axios({
        method: 'post',
        url: `/api/tags/${tagId}/follow`,
        headers: {
          token,
        },
      });
      const { data } = res;
      return { data: data.userTag };
    } catch (err) {
      console.log(err); // eslint-disable-line no-console
      return { err };
    }
  },
  unfollowTag: async tagId => {
    const token = localStorage.getItem('token');
    if (!token) {
      return { err: 'Token was not found.' };
    }
    try {
      await axios({
        method: 'delete',
        url: `/api/tags/${tagId}/unfollow`,
        headers: {
          token,
        },
      });
      return { data: 'Deleteing relationship succeeded' };
    } catch (err) {
      console.log(err); // eslint-disable-line no-console
      return { err };
    }
  },
  fetchTagRanking: async interval => {
    try {
      const res = await axios({
        method: 'get',
        url: `/api/tags/ranking?interval=${interval}`,
      });
      const { data } = res;
      const { tags } = data;
      return { tags };
    } catch (err) {
      console.log(err); // eslint-disable-line no-console
      return { err };
    }
  },
};

function* fetchTag(action): Saga<void> {
  try {
    const { err, tag } = yield call(Api.fetchTag, action.payload.tagName);
    if (err) {
      yield put(fetchTagFailed({ message: err.message }));
    } else if (tag) {
      yield put(fetchTagSucceeded({ tag }));
    }
  } catch (e) {
    yield put(fetchTagFailed({ message: e.message }));
  }
}

function* fetchTags(): Saga<void> {
  try {
    const { err, tags } = yield call(Api.fetchTags);
    if (err) {
      yield put(fetchTagsFailed({ message: err.message }));
    } else if (tags) {
      yield put(fetchTagsSucceeded({ tags }));
    }
  } catch (e) {
    yield put(fetchTagsFailed({ message: e.message }));
  }
}

function* followTag(action): Saga<void> {
  try {
    const { tag, user } = action.payload;
    const { err, data } = yield call(Api.followTag, tag.id);
    if (err) {
      yield put(followTagFailed({ message: err.message }));
    } else if (data) {
      yield put(followTagSucceeded({ tag, user }));
    }
  } catch (e) {
    yield put(followTagFailed({ message: e.message }));
  }
}

function* unfollowTag(action): Saga<void> {
  try {
    const { tagId, userId } = action.payload;
    const { err, data } = yield call(Api.unfollowTag, tagId);
    if (err) {
      yield put(unfollowTagFailed({ message: err.message }));
    } else if (data) {
      yield put(unfollowTagSucceeded({ tagId, userId }));
    }
  } catch (e) {
    yield put(unfollowTagFailed({ message: e.message }));
  }
}

function* fetchTagRanking(action): Saga<void> {
  try {
    const { interval } = action.payload;
    const { err, tags } = yield call(Api.fetchTagRanking, interval);
    if (err) {
      yield put(fetchTagRankingFailed({ message: err.message }));
    } else if (tags) {
      yield put(fetchTagRankingSucceeded({ interval, tags }));
    }
  } catch (e) {
    yield put(fetchTagRankingFailed({ message: e.message }));
  }
}

function* watchFetchTag() {
  yield takeEvery(fetchTagRequested.getType(), fetchTag);
}

function* watchFetchTags() {
  yield takeEvery(fetchTagsRequested.getType(), fetchTags);
}

function* watchFollowTag() {
  yield takeEvery(followTagRequested.getType(), followTag);
}

function* watchUnfollowTag() {
  yield takeEvery(unfollowTagRequested.getType(), unfollowTag);
}

function* watchFetchTagRanking() {
  yield takeEvery(fetchTagRankingRequested.getType(), fetchTagRanking);
}

function* rootSaga(): Saga<void> {
  yield all([
    fork(watchFetchTag),
    fork(watchFetchTags),
    fork(watchFollowTag),
    fork(watchUnfollowTag),
    fork(watchFetchTagRanking),
  ]);
}

export default rootSaga;
