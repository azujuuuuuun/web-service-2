// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';

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

export default DraftsPage;
