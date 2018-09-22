// @flow

import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CheckIcon from '@material-ui/icons/Check';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import { likeRequested, unlikeRequested } from '../../actions';
import type { Viewer } from '../../reducers/viewer';

type PProps = {
  hasLiked: boolean,
  handleClickLike: any,
  item: any,
  handleClickUnlike: any,
};

type CProps = {
  viewer: Viewer,
  likeRequest: (item: any, user: any) => void,
  unlikeRequest: (itemId: string, userId: string) => void,
  hasLiked: boolean,
  item: any,
};

const LikeButton = (props: PProps) => {
  const { hasLiked, handleClickLike, item, handleClickUnlike } = props;
  return !hasLiked ? (
    <Tooltip title="いいね">
      <span>
        <Button onClick={() => handleClickLike(item)} disabled={hasLiked}>
          <ThumbUpIcon />
          <span>{item.likers.length}</span>
        </Button>
      </span>
    </Tooltip>
  ) : (
    <Tooltip title="いいね済み">
      <span>
        <Button onClick={() => handleClickUnlike(item.id)} disabled={!hasLiked}>
          <CheckIcon />
          <span>{item.likers.length}</span>
        </Button>
      </span>
    </Tooltip>
  );
};

class LikeButtonContainer extends React.Component<CProps> { // eslint-disable-line
  handleClickLike = item => {
    const { likeRequest, viewer } = this.props;
    likeRequest(item, viewer);
  };

  handleClickUnlike = itemId => {
    const { unlikeRequest, viewer } = this.props;
    if (viewer.id) {
      unlikeRequest(itemId, viewer.id);
    }
  };

  render() {
    const { item, hasLiked } = this.props;
    return (
      <LikeButton
        item={item}
        handleClickLike={this.handleClickLike}
        handleClickUnlike={this.handleClickUnlike}
        hasLiked={hasLiked}
      />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  likeRequest: (item, user) =>
    dispatch(
      likeRequested({
        item,
        user,
      }),
    ),
  unlikeRequest: (itemId, userId) =>
    dispatch(
      unlikeRequested({
        itemId,
        userId,
      }),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LikeButtonContainer);
