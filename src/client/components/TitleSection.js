// @flow

import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

type Props = {
  avatarImgSrc: string,
  username: string,
  title: string,
};

const Account = styled.div`
  display: inline-block;
`;

const AvatarWrapper = styled.div`
  display: inline-block;
`;

const Username = styled.div`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Separater = styled.span`
  font-size: 1.5rem;
`;

const Title = styled.div`
  display: inline-block;
  span {
    font-size: 1.5rem;
  }
`;

const TitleSection = (props: Props) => {
  const { avatarImgSrc, username, title } = props;
  return (
    <div>
      <Account>
        <AvatarWrapper>
          <Avatar src={avatarImgSrc}>
            {username}
          </Avatar>
        </AvatarWrapper>
        <Username>
          <StyledLink to={`/${username}`}>
            {username}アカウント
          </StyledLink>
        </Username>
      </Account>
      <Separater>/</Separater>
      <Title>
        <span>{title}</span>
      </Title>
    </div>
  );
};

export default TitleSection;
