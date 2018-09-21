// @flow

import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { unfollowRequested } from '../actions';

type Props = {
  unfollowRequest: any,
  userId: string,
};

const UnfollowButton = (props: Props) => {
  const { unfollowRequest, userId } = props;
  return <Button onClick={() => unfollowRequest(userId)}>解除</Button>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) => ({
  unfollowRequest: followedId => dispatch(unfollowRequested({ followedId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnfollowButton);
