// @flow

import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';

import type { Dropdown } from '../../../reducers/dropdown';

type Props = {
  dropdown: Dropdown,
  closeDropdown: () => void,
};

const HomeDropdown = (props: Props) => {
  const { dropdown, closeDropdown } = props;
  return (
    <Menu
      open={dropdown.isOpen && dropdown.kind === 'community'}
      onClose={closeDropdown}
    >
      <MenuItem>
        <Link to="/users" onClick={closeDropdown}>
          <PeopleIcon />
          <span>ユーザー一覧</span>
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default HomeDropdown;
