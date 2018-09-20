// @flow

import React from 'react';
import { connect } from 'react-redux';

import StockButton from '../components/StockButton';
import { stockRequested, unstockRequested } from '../actions';

class StockButtonContainer extends React.Component<any, void> { // eslint-disable-line
  render() {
    const { item, stockRequest, unstockRequest, hasStocked } = this.props;
    return (
      <StockButton
        item={item}
        handleClickStock={stockRequest}
        handleClickUnstock={unstockRequest}
        hasStocked={hasStocked}
      />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) => ({
  stockRequest: item => dispatch(stockRequested({ item })),
  unstockRequest: itemId => dispatch(unstockRequested({ itemId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockButtonContainer);
