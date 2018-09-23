// @flow

import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import type { Item as ItemType } from '../../types';

type Props = {
  items: Array<ItemType>,
};

const Item = styled.div`
  border-top: 1px solid lightgray;
  padding: 0.75rem;
`;

const AvatarWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const Body = styled.div`
  display: inline-block;
`;

const Info = styled.div`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const TableList = (props: Props) => {
  const { items } = props;
  return (
    <div className="table-list">
      {items.map(i => (
        <Item key={i.id}>
          <AvatarWrapper>
            <Avatar src={i.user.avatarImgSrc} alt="アバター">
              {i.user.username}
            </Avatar>
          </AvatarWrapper>
          <Body>
            <Info>
              <StyledLink to={`/${i.user.username}`}>
                {i.user.username}
              </StyledLink>
              が{i.updatedAt}
              に投稿
            </Info>
            <div>
              <StyledLink to={`/${i.user.username}/items/${i.id}`}>
                {i.title}
              </StyledLink>
            </div>
          </Body>
        </Item>
      ))}
    </div>
  );
};

export default TableList;
