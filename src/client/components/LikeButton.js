// @flow

import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CheckIcon from '@material-ui/icons/Check';

type Props = {
  hasLiked: boolean,
  handleClickLike: any,
  item: any,
  handleClickUnlike: any,
};

const LikeButton = (props: Props) => {
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

export default LikeButton;
