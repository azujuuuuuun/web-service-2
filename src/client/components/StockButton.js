// @flow

import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

type Props = {
  hasStocked: boolean,
  handleClickStock: any,
  item: any,
  handleClickUnstock: any,
};

const StockButton = (props: Props) => {
  const {
    hasStocked, handleClickStock, item, handleClickUnstock,
  } = props;
  return !hasStocked ? (
    <Tooltip title="ストック">
      <span>
        <IconButton
          onClick={() => handleClickStock(item)}
          disabled={hasStocked}
        >
          <BookmarkBorderIcon />
        </IconButton>
      </span>
    </Tooltip>
  ) : (
    <Tooltip title="ストック済み">
      <span>
        <IconButton
          onClick={() => handleClickUnstock(item.id)}
          disabled={!hasStocked}
        >
          <BookmarkIcon />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default StockButton;
