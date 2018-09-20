// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

type Props = {
  items: Array<any>,
};

const Item = styled.div`
  border-top: 1px solid lightgray;
  padding: 0.75rem;
`;

const AvatarWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const Content = styled.div`
  display: inline-block;
`;

const Title = styled(Link)`
  color: black;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const By = styled.span`
  color: gray;
  margin-right: 0.25rem;
`;

const User = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: gray;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Date = styled.div`
  color: gray;
  display: inline-block;
`;

const ItemList = (props: Props) => {
  const { items } = props;
  return (
    <div>
      {items.map(i => (
        <Item key={i.id}>
          <AvatarWrapper>
            <Avatar src={i.user.avatarImgSrc}>{i.user.username}</Avatar>
          </AvatarWrapper>
          <Content>
            <div>
              <Title to={`/${i.user.username}/items/${i.id}`}>{i.title}</Title>
            </div>
            <div>
              <User>
                <By>by</By>
                <StyledLink to={`/${i.user.username}`}>
                  {i.user.username}
                </StyledLink>
              </User>
              <Date>
                <span>{i.updatedAt}</span>
              </Date>
            </div>
          </Content>
        </Item>
      ))}
    </div>
  );
};

export default ItemList;
