// @flow

import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

import type { Dropdown } from '../../../reducers/dropdown';

type Props = {
  dropdown: Dropdown,
  closeDropdown: () => void,
  username?: string, // eslint-disable-line
  draftItemId: string,
  handleClickLogout: () => any,
};

const ViewerDropdown = (props: Props) => {
  const {
    dropdown,
    closeDropdown,
    username,
    draftItemId,
    handleClickLogout,
  } = props;
  return (
    <Menu
      open={dropdown.isOpen && dropdown.kind === 'viewer'}
      onClose={closeDropdown}
    >
      <MenuItem>
        {username && (
          <Link to={`/${username}`} onClick={closeDropdown}>
            マイページ
          </Link>
        )}
      </MenuItem>
      <MenuItem>
        {draftItemId ? (
          <Link to={`/drafts/${draftItemId}`} onClick={closeDropdown}>
            下書き一覧
          </Link>
        ) : (
          <Link to="/drafts" onClick={closeDropdown}>
            下書き一覧
          </Link>
        )}
      </MenuItem>
      <MenuItem>
        <Link to="settings/account" onClick={closeDropdown}>
          設定
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClickLogout}>ログアウト</MenuItem>
    </Menu>
  );
};

export default ViewerDropdown;
