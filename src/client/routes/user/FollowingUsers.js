// @flow

import React from 'react';
import styled from 'styled-components';
import PeopleIcon from '@material-ui/icons/People';
import Avatar from '@material-ui/core/Avatar';

import type { User as UserType } from '../../types';

type Props = {
  users: Array<UserType>,
};

const InlineBlock = styled.div`
  display: inline-block;
`;

const User = styled.div`
  display: inline-block;
`;

const FollowingUsers = (props: Props) => {
  const { users } = props;
  return (
    <div>
      <div>
        <InlineBlock>
          <PeopleIcon />
          <span>フォロー中のユーザー</span>
        </InlineBlock>
        <InlineBlock>
          <span>{users.length}</span>
        </InlineBlock>
      </div>
      {users.map(u => (
        <User key={u.id}>
          <Avatar src={u.avatarImgSrc} alt="アバター">
            {u.username}
          </Avatar>
        </User>
      ))}
    </div>
  );
};

export default FollowingUsers;
