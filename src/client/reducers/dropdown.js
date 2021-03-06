// @flow

import { createReducer } from 'redux-act';

import { closeDropdown, openDropdown } from '../actions';

export type Dropdown = {
  kind: string,
  isOpen: boolean,
};

const defaultState = {
  kind: '',
  isOpen: false,
};

const dropdown = createReducer(
  {
    [openDropdown.getType()]: (state, payload) =>
      Object.assign({}, state, {
        kind: payload.kind,
        isOpen: true,
      }),
    [closeDropdown.getType()]: state =>
      Object.assign({}, state, {
        kind: '',
        isOpen: false,
      }),
  },
  defaultState,
);

export default dropdown;
