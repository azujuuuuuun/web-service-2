// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';

import GlobalHeader from './GlobalHeader';
import ItemList from './ItemList';

type Props = {
  items: Array<any>,
};

const AppPage = (props: Props) => {
  const { items } = props;
  return (
    <div>
      <GlobalHeader />
      <Grid container justify="center">
        <Grid item xs={7}>
          <ItemList items={items} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AppPage;
