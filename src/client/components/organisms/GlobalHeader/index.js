// @flow

import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PeopleIcon from '@material-ui/icons/People';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import SearchFormContainer from '../../molecules/SearchForm';
import {
  openDropdown,
  closeDropdown as closeDropdownAction,
  logoutRequested,
} from '../../../actions';
import type { Viewer } from '../../../reducers/viewer';
import type { Dropdown } from '../../../reducers/dropdown';

type Props = {
  viewer: Viewer,
  dropdown: Dropdown,
  openCommunityDropdown: () => void,
  openViewerDropdown: () => void,
  closeDropdown: () => void,
  draftItemId: string,
  handleClickLogout: () => any,
};

const Header = styled.div`
  margin-bottom: 65px;
`;

const GlobalHeader = (props: Props) => {
  const {
    viewer,
    dropdown,
    openCommunityDropdown,
    openViewerDropdown,
    closeDropdown,
    draftItemId,
    handleClickLogout,
  } = props;
  return (
    <Header>
      <AppBar>
        <Toolbar posithin="static">
          <Link to="/">Qiita</Link>
          <span>コミュニティ</span>
          <IconButton onClick={openCommunityDropdown}>
            <ArrowDropDownIcon />
          </IconButton>
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
          <SearchFormContainer />
          <Link to="/stock">
            <FolderOpenIcon />
            <span>ストック一覧</span>
          </Link>
          <Link to="/drafts/new">投稿する</Link>
          <Avatar src={viewer.avatarImgSrc} alt="アバター">
            {viewer.username}
          </Avatar>
          <IconButton onClick={openViewerDropdown}>
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            open={dropdown.isOpen && dropdown.kind === 'viewer'}
            onClose={closeDropdown}
          >
            <MenuItem>
              {viewer.username && (
                <Link to={`/${viewer.username}`} onClick={closeDropdown}>
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
        </Toolbar>
      </AppBar>
    </Header>
  );
};

const mapStateToProps = state => {
  const { viewer, dropdown } = state;
  const { items } = viewer || {};
  const draftItems = items && items.filter(i => i.status === 'draft');
  const draftItemId = draftItems.length === 0 ? '' : draftItems[0].id;
  return {
    viewer,
    dropdown,
    draftItemId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  openCommunityDropdown: () => dispatch(openDropdown({ kind: 'community' })),
  openViewerDropdown: () => dispatch(openDropdown({ kind: 'viewer' })),
  closeDropdown: () => dispatch(closeDropdownAction()),
  handleClickLogout: () => {
    dispatch(closeDropdownAction());
    dispatch(logoutRequested());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GlobalHeader);
