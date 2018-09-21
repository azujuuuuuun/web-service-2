// @flow

import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { followRequested } from '../../actions';

type Props = {
  followRequest: any,
  user: any,
};

const FollowButton = (props: Props) => {
  const { followRequest, user } = props;
  return <Button onClick={() => followRequest(user)}>フォロー</Button>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) => ({
  followRequest: user => dispatch(followRequested({ user })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FollowButton);
