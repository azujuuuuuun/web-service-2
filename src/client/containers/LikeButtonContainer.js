// @flow

import React from 'react';
import { connect } from 'react-redux';

import LikeButton from '../components/LikeButton';
import { likeRequested, unlikeRequested } from '../actions';

class LikeButtonContainer extends React.Component<any, void> { // eslint-disable-line
  handleClickLike = (item) => {
    const { likeRequest, viewer } = this.props;
    likeRequest(item, viewer);
  }

  handleClickUnlike = (itemId) => {
    const { unlikeRequest, viewer } = this.props;
    unlikeRequest(itemId, viewer.id);
  }

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

const mapDispatchToProps = (dispatch: any) => ({
  likeRequest: (item, user) => dispatch(likeRequested({
    item, user,
  })),
  unlikeRequest: (itemId, userId) => dispatch(unlikeRequested({
    itemId, userId,
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LikeButtonContainer);
