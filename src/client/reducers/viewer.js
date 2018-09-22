// @flow

import { createReducer } from 'redux-act';

import {
  signupSucceeded,
  loginSucceeded,
  logoutSucceeded,
  authenticateSucceeded,
  followRequested,
  unfollowRequested,
  likeSucceeded,
  unlikeSucceeded,
  stockSucceeded,
  unstockSucceeded,
  followTagSucceeded,
  unfollowTagSucceeded,
  updateNotificationsSucceeded,
  uploadImageSucceeded,
} from '../actions';
import type { User, Item, Tag, Comment } from '../types';

export type Viewer = {
  isLoggedIn: boolean,
  id?: string,
  username?: string,
  firstName?: string,
  lastName?: string,
  web?: string,
  organization?: string,
  location?: string,
  desctiption?: string,
  avatarImgSrc?: string,
  createdAt?: Date,
  updatedAt?: Date,
  items: Array<Item>,
  likes: Array<Item>,
  stocks: Array<Item>,
  comments?: Array<Comment>,
  followings: Array<User>,
  followers?: Array<User>,
  followingTags: Array<Tag>,
  notifications: Array<any>,
};

const defaultState = {
  isLoggedIn: false,
  items: [],
  followings: [],
  likes: [],
  stocks: [],
  followingTags: [],
  notifications: [],
};

const viewer = createReducer(
  {
    [signupSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        isLoggedIn: true,
        ...payload.user,
      }),
    [loginSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        isLoggedIn: true,
        ...payload.user,
      }),
    [logoutSucceeded.getType()]: () => ({ isLoggedIn: false }),
    [authenticateSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        isLoggedIn: true,
        ...payload.user,
      }),
    [likeSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        likes: [payload.item, ...state.likes],
      }),
    [unlikeSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        likes: state.likes.filter(i => i.id !== payload.itemId),
      }),
    [stockSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        stocks: [payload.item, ...state.stocks],
      }),
    [unstockSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        stocks: state.stocks.filter(i => i.id !== payload.itemId),
      }),
    [followRequested.getType()]: (state, payload) =>
      Object.assign({}, state, {
        followings: [payload.user, ...state.followings],
      }),
    [unfollowRequested.getType()]: (state, payload) =>
      Object.assign({}, state, {
        followings: state.followings.filter(f => f.id !== payload.followedId),
      }),
    [followTagSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        followingTags: [payload.tag, ...state.followingTags],
      }),
    [unfollowTagSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        followingTags: state.followingTags.filter(t => t.id !== payload.tagId),
      }),
    [updateNotificationsSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        notifications: payload.notifications,
      }),
    [uploadImageSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        avatarImgSrc: payload.avatarImgSrc,
      }),
  },
  defaultState,
);

export default viewer;
