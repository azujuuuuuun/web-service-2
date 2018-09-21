// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import GlobalHeader from './GlobalHeader';
import DraftsSidebar from './DraftsSidebar';
import DraftsPreview from './DraftsPreview';

type Props = {
  draftItems: Array<any>,
  postedItems: Array<any>,
  item: any,
};

const DraftsPage = (props: Props) => {
  const { draftItems, postedItems, item } = props;
  return (
    <div>
      <GlobalHeader />
      <Grid container justify="center" spacing={16}>
        <Grid item xs={3}>
          <DraftsSidebar draftItems={draftItems} postedItems={postedItems} />
        </Grid>
        <Grid item xs={7}>
          <DraftsPreview item={item} />
        </Grid>
      </Grid>
    </div>
  );
};

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
