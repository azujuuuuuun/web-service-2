// @flow

import { createReducer } from 'redux-act';

import {
  fetchTagSucceeded,
  fetchTagsSucceeded,
  followTagSucceeded,
  unfollowTagSucceeded,
} from '../actions';
import type { Item, User } from '../types';

export type Tag = {
  id?: string,
  name?: string,
  createdAt?: Date,
  updatedAt?: Date,
  items: Array<Item>,
  followers: Array<User>,
};

const tagDefaultState = {
  items: [],
  followers: [],
};

export const tag = createReducer(
  {
    [fetchTagSucceeded.getType()]: (state, payload) => payload.tag,
    [followTagSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        followers: [payload.user, ...state.followers],
      }),
    [unfollowTagSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        followers: state.followers.filter(u => u.id !== payload.userId),
      }),
  },
  tagDefaultState,
);

const tagsDefaultState = [];

export const tags = createReducer(
  {
    [fetchTagsSucceeded.getType()]: (state, payload) => payload.tags,
  },
  tagsDefaultState,
);
