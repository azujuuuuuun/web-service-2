// @flow

import React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  unfollowRequest: any,
  userId: string,
};

const UnfollowButton = (props: Props) => {
  const { unfollowRequest, userId } = props;
  return <Button onClick={() => unfollowRequest(userId)}>解除</Button>;
};

export default UnfollowButton;
