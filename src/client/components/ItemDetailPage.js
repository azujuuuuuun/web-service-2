// @flow

import React from 'react';
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
    <div>
      <GlobalHeader />
      {!item.user ? (
        <NotFound />
      ) : (
        <div>
          <div>
            <div>
              <Avatar src={item.user.avatarImgSrc} alt="アバター">
                {item.user.username}
              </Avatar>
              <Link to={`/${item.user.username}`}>
                {`@${item.user.username}`}
              </Link>
              <span>{item.updatedAt}</span>
            </div>
            <h1>{item.title}</h1>
            <Tags tags={item.tags} />
            <LikeButton item={item} hasLiked={hasLiked} viewer={viewer} />
            <StockButton item={item} hasStocked={hasStocked} />
            <p>{item.body}</p>
          </div>
          <div>
            <CommentList comments={item.comments} />
            <CommentForm viewer={viewer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailPage;
