// @flow

/* eslint-disable no-use-before-define */
export type User = {
  id: string,
  username: string,
  firstName: string,
  lastName: string,
  web: string,
  organization: string,
  location: string,
  desctiption: string,
  avatarImgSrc: string,
  createdAt: Date,
  updatedAt: Date,
  items: Array<Item>,
  likes: Array<Item>,
  stocks: Array<Item>,
  comments: Array<Comment>,
  followings: Array<User>,
  followers: Array<User>,
  followingTags: Array<Tag>,
};

export type Item = {
  id: string,
  userId: string,
  title: string,
  body: string,
  status: string,
  createdAt: Date,
  updatedAt: Date,
  user: User,
  likers: Array<User>,
  comments: Array<Comment>,
  tags: Array<Tag>,
};

export type Tag = {
  id: string,
  name: string,
  createdAt: Date,
  updatedAt: Date,
  items: Array<Item>,
  followers: Array<User>,
};

export type Comment = {
  id: string,
  userId: string,
  itemId: string,
  text: string,
  createdAt: Date,
  updatedAt: Date,
  user: User,
  item: Item,
};

export type Notification = {
  id: string,
  userId: string,
  kind: string,
  createdAt: Date,
  updatedAt: Date,
};

export type History = {
  length: number,
  action: string,
  location: {
    pathname: string,
    search: string,
    hash: string,
    state: Object,
  },
  push: Function,
  replace: Function,
  go: Function,
  goBack: Function,
  goForward: Function,
  block: Function,
};

export type Match = {
  params: Object,
  isExact: boolean,
  path: string,
  url: string,
};

export type Location = {
  key: string,
  pathname: string,
  search: string,
  hash: string,
  state: Object,
};
