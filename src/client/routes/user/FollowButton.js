// @flow

import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import { followRequested } from '../../actions';
import type { User } from '../../reducers/user';

type Props = {
  followRequest: any,
  user: User,
};

const FollowButton = (props: Props) => {
  const { followRequest, user } = props;
  return <Button onClick={() => followRequest(user)}>フォロー</Button>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  followRequest: user => dispatch(followRequested({ user })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FollowButton);
