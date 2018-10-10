// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';

import GlobalHeader from '../../organisms/GlobalHeader';
import HomeMenu from '../../molecules/HomeMenu';
import ItemList from '../../molecules/ItemList';
import TagList from '../../organisms/TagList';
import type { Item } from '../../../types';
import type { Tags } from '../../../reducers/tagRanking';

type PProps = {
  handleListItemClick: (e: Event, path: string) => any,
  items: Array<Item>,
  tagRanking: Tags,
  handleClickTagRanking: (interval: string) => any,
};

const TagFeedTemplate = (props: PProps) => {
  const {
    handleListItemClick,
    items,
    tagRanking,
    handleClickTagRanking,
  } = props;
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
        <Grid item xs={6}>
          <ItemList items={items} />
        </Grid>
        <Grid item xs={3}>
          <TagList
            tagRanking={tagRanking}
            handleClickTagRanking={handleClickTagRanking}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TagFeedTemplate;
