// @flow

import React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  followRequest: any,
  user: any,
};

const FollowButton = (props: Props) => {
  const { followRequest, user } = props;
  return <Button onClick={() => followRequest(user)}>フォロー</Button>;
};

export default FollowButton;
