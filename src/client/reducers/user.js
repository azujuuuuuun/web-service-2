import { createReducer } from 'redux-act';

import { fetchUserSucceeded, fetchUsersSucceeded } from '../actions';
import type { User as UserType, Item, Tag, Comment } from '../types';

export type User = {
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
  likes?: Array<Item>,
  stocks?: Array<Item>,
  comments?: Array<Comment>,
  followings?: Array<UserType>,
  followers?: Array<UserType>,
  followingTags: Array<Tag>,
};

export type Users = Array<User>;

const userDefaultState = {
  items: [],
  followingTags: [],
};

export const user = createReducer(
  {
    [fetchUserSucceeded.getType()]: (state, payload) => payload.user,
  },
  userDefaultState,
);

const usersDefaultState = [];

export const users = createReducer(
  {
    [fetchUsersSucceeded.getType()]: (state, payload) => payload.users,
  },
  usersDefaultState,
);
