// @flow

import { createReducer } from 'redux-act';

import { fetchTagRankingSucceeded } from '../actions';

export type Tag = {
  id?: string,
  name?: string,
  createdAt?: Date,
  updatedAt?: Date,
  itemsCount?: number,
};

export type Tags = Array<Tag>;

export type TagRanking = {
  weekly: Tags,
  monthly: Tags,
  all: Tags,
};

const defaultState = {
  weekly: [],
  monthly: [],
  all: [],
};

const tagRanking = createReducer(
  {
    [fetchTagRankingSucceeded.getType()]: (state, payload) =>
      Object.assign({}, state, {
        [payload.interval]: payload.tags,
      }),
  },
  defaultState,
);

export default tagRanking;
