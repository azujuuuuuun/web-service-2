// @flow

import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import { stockRequested, unstockRequested } from '../../actions';
import type { Item } from '../../reducers/item';

type Props = {
  hasStocked: boolean,
  handleClickStock: any,
  item: Item,
  handleClickUnstock: any,
};

const StockButton = (props: Props) => {
  const { hasStocked, handleClickStock, item, handleClickUnstock } = props;
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

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  handleClickStock: item => dispatch(stockRequested({ item })),
  handleClickUnstock: itemId => dispatch(unstockRequested({ itemId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockButton);
