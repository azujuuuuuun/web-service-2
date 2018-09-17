// @flow

import React from 'react';
import { connect } from 'react-redux';

import Loading from './LoadingContainer';
import ItemDetailPage from '../components/ItemDetailPage';
import { fetchItemRequested } from '../actions';

type Props = {
  item: any,
  viewer: any,
  fetchItemRequest: any,
  match: any,
};

class ItemDetailPageContainer extends React.Component<Props, void> { // eslint-disable-line
  componentDidMount() {
    const { match, fetchItemRequest } = this.props;
    const { itemId } = match.params;
    fetchItemRequest(itemId);
  }

  render() {
    const {
      item,
      viewer,
    } = this.props;
    const hasLiked = viewer.likes.some(i => i.id === item.id);
    const hasStocked = viewer.stocks.some(i => i.id === item.id);
    return (
      <Loading>
        <ItemDetailPage
          item={item}
          hasLiked={hasLiked}
          hasStocked={hasStocked}
          viewer={viewer}
        />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  viewer: state.viewer,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchItemRequest: itemId => dispatch(fetchItemRequested({ itemId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemDetailPageContainer);
