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
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import HomeDropdown from '../../molecules/HomeDropdown';
import CommunityDropdown from '../../molecules/CommunityDropdown';
import ViewerDropdown from '../../molecules/ViewerDropdown';
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
  openHomeDropdown: () => void,
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
    openHomeDropdown,
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
          <span>ホーム</span>
          <IconButton onClick={openHomeDropdown}>
            <ArrowDropDownIcon />
          </IconButton>
          <HomeDropdown dropdown={dropdown} closeDropdown={closeDropdown} />
          <span>コミュニティ</span>
          <IconButton onClick={openCommunityDropdown}>
            <ArrowDropDownIcon />
          </IconButton>
          <CommunityDropdown
            dropdown={dropdown}
            closeDropdown={closeDropdown}
          />
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
          <ViewerDropdown
            dropdown={dropdown}
            closeDropdown={closeDropdown}
            username={viewer.username}
            draftItemId={draftItemId}
            handleClickLogout={handleClickLogout}
          />
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
  openHomeDropdown: () => dispatch(openDropdown({ kind: 'home' })),
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
