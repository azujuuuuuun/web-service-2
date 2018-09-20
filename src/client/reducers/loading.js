import { createReducer } from 'redux-act';

import {
  authenticateRequested,
  authenticateSucceeded,
  authenticateFailed,
  fetchItemRequested,
  fetchItemSucceeded,
  fetchItemFailed,
  fetchItemsRequested,
  fetchItemsSucceeded,
  fetchItemsFailed,
} from '../actions';

const defaultState = true;

const loading = createReducer(
  {
    [authenticateRequested.getType()]: () => true,
    [authenticateSucceeded.getType()]: () => false,
    [authenticateFailed.getType()]: () => false,
    [fetchItemRequested.getType()]: () => true,
    [fetchItemSucceeded.getType()]: () => false,
    [fetchItemFailed.getType()]: () => false,
    [fetchItemsRequested.getType()]: () => true,
    [fetchItemsSucceeded.getType()]: () => false,
    [fetchItemsFailed.getType()]: () => false,
  },
  defaultState,
);

export default loading;
