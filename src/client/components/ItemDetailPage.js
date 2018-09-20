// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import GlobalHeader from '../containers/GlobalHeaderContainer';
import NotFound from './NotFound';
import Tags from './Tags';
import LikeButton from '../containers/LikeButtonContainer';
import StockButton from '../containers/StockButtonContainer';
import CommentList from './CommentList';
import CommentForm from '../containers/CommentFormContainer';

type Props = {
  item: any,
  hasLiked: boolean,
  hasStocked: boolean,
  viewer: any,
};

const Item = styled.div`
  margin-top: 2rem;
`;

const AvatarWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const Date = styled.span`
  color: gray;
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: black;
  margin-right: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ItemDetailPage = (props: Props) => {
  const { item, hasLiked, hasStocked, viewer } = props;
  return (
    <div>
      <GlobalHeader />
      {!item.user ? (
        <NotFound />
      ) : (
        <Grid container justify="center">
          <Grid item xs={7}>
            <Item>
              <div>
                <AvatarWrapper>
                  <Avatar src={item.user.avatarImgSrc} alt="アバター">
                    {item.user.username}
                  </Avatar>
                </AvatarWrapper>
                <StyledLink to={`/${item.user.username}`}>
                  {`@${item.user.username}`}
                </StyledLink>
                <Date>{item.updatedAt}</Date>
              </div>
              <Title>{item.title}</Title>
              <Tags tags={item.tags} />
              <LikeButton item={item} hasLiked={hasLiked} viewer={viewer} />
              <StockButton item={item} hasStocked={hasStocked} />
              <p>{item.body}</p>
            </Item>
            <div>
              <CommentList comments={item.comments} />
              <CommentForm viewer={viewer} />
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ItemDetailPage;
