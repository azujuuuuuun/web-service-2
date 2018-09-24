// @flow

import { createReducer } from 'redux-act';

import {
  postItemSucceeded,
  fetchItemSucceeded,
  likeSucceeded,
  unlikeSucceeded,
  postCommentSucceeded,
  fetchItemsSucceeded,
  searchItemsSucceeded,
} from '../actions';
import type { User, Comment, Tag, Item as ItemType } from '../types';

export type Item = {
  id?: string,
  userId?: string,
  title?: string,
  body?: string,
  status?: string,
  createdAt?: Date,
  updatedAt?: Date,
  user?: User,
  likers: Array<User>,
  comments: Array<Comment>,
  tags: Array<Tag>,
};

export type Items = Array<ItemType>;

const itemDefaultState = {
  tags: [],
  likers: [],
  comments: [],
};
const itemsDefaultState = [];

export const item = createReducer(
  {
    [postItemSucceeded.getType()]: (state, payload) => payload.item,
    [fetchItemSucceeded.getType()]: (state, payload) => payload.item,
    [likeSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        likers: [payload.user, ...state.likers],
      }),
    [unlikeSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        likers: state.likers.filter(u => u.id !== payload.userId),
      }),
    [postCommentSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        comments: [payload.comment, ...state.comments],
      }),
  },
  itemDefaultState,
);

export const items = createReducer(
  {
    [fetchItemsSucceeded.getType()]: (state, payload) => payload.items,
    [searchItemsSucceeded.getType()]: (state, payload) => payload.items,
  },
  itemsDefaultState,
);
