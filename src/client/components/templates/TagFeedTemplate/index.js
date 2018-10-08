// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';

import GlobalHeader from '../../organisms/GlobalHeader';
import HomeMenu from '../../molecules/HomeMenu';
import ItemList from '../../molecules/ItemList';
import type { Item } from '../../../types';

type PProps = {
  handleListItemClick: (e: Event, path: string) => any,
  items: Array<Item>,
};

const TagFeedTemplate = (props: PProps) => {
  const { handleListItemClick, items } = props;
  return (
    <div>
      <GlobalHeader />
      <Grid container justify="center">
        <Grid item xs={3}>
          <HomeMenu
            selectedPath="/tag-feed"
            handleListItemClick={handleListItemClick}
          />
        </Grid>
        <Grid item xs={7}>
          <ItemList items={items} />
        </Grid>
      </Grid>
    </div>
  );
};

export default TagFeedTemplate;
