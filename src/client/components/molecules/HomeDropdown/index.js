// @flow

import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Link } from 'react-router-dom';
import LabelIcon from '@material-ui/icons/Label';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import type { Dropdown } from '../../../reducers/dropdown';

type Props = {
  dropdown: Dropdown,
  closeDropdown: () => void,
};

const HomeDropdown = (props: Props) => {
  const { dropdown, closeDropdown } = props;
  return (
    <Menu
      open={dropdown.isOpen && dropdown.kind === 'home'}
      onClose={closeDropdown}
    >
      <MenuItem>
        <Link to="/" onClick={closeDropdown}>
          <TrendingUpIcon />
          <span>トレンド</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/timeline" onClick={closeDropdown}>
          <FormatListBulletedIcon />
          <span>タイムライン</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/tag-feed" onClick={closeDropdown}>
          <LabelIcon />
          <span>タグフィード</span>
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default HomeDropdown;
