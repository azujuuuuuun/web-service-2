// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuItem = styled.div`
  padding: 0.25rem 0.5rem;
  :not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`;

const StyledLink = styled(Link)`
  color: gray;
  font-size: 0.9rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SettingsMenu = () => (
  <div>
    <MenuItem>
      <StyledLink to="/settings/profile">公開用プロフィール</StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/settings/account">アカウント</StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/settings/password">パスワード</StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/settings/notifications">メールアドレスと通知</StyledLink>
    </MenuItem>
  </div>
);

export default SettingsMenu;
