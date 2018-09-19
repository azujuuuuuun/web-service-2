// @flow

import React from 'react';
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

const ItemDetailPage = (props: Props) => {
  const {
    item,
    hasLiked,
    hasStocked,
    viewer,
  } = props;
  return (
    <div className="item-detail-page">
      <GlobalHeader />
      {!item.user ? (
        <NotFound />
      ) : (
        <Grid container justify="center">
          <Grid item xs={7}>
            <div className="item">
              <div>
                <Avatar className="avatar" src={item.user.avatarImgSrc} alt="アバター">
                  {item.user.username}
                </Avatar>
                <Link
                  className="username"
                  to={`/${item.user.username}`}
                >
                  {`@${item.user.username}`}
                </Link>
                <span className="date">{item.updatedAt}</span>
              </div>
              <h1 className="title">{item.title}</h1>
              <Tags tags={item.tags} />
              <LikeButton item={item} hasLiked={hasLiked} viewer={viewer} />
              <StockButton item={item} hasStocked={hasStocked} />
              <p>{item.body}</p>
            </div>
            <div className="comment">
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
