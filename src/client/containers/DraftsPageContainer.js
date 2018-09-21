// @flow

import { connect } from 'react-redux';

import DraftsPage from '../components/DraftsPage';

const mapStateToProps = (state, ownProps) => {
  const { items } = state.viewer;
  const draftItems = items.filter(i => i.status === 'draft');
  const postedItems = items.filter(i => i.status === 'posted');
  const { itemId: itemIdStr } = ownProps.match.params;
  const itemId = Number(itemIdStr);
  const itemArr = (itemId && items.filter(i => i.id === itemId)) || undefined;
  const item = (itemArr && itemArr[0]) || undefined;
  return {
    draftItems,
    postedItems,
    item,
  };
};

export default connect(mapStateToProps)(DraftsPage);
