// @flow

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LabelIcon from '@material-ui/icons/Label';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

type Props = {
  selectedPath: string,
  handleListItemClick: (e: Event, path: string) => any,
};

const HomeMenu = (props: Props) => {
  const { selectedPath, handleListItemClick } = props;
  return (
    <div>
      <List>
        <ListItem
          button
          selected={selectedPath === '/'}
          onClick={e => handleListItemClick(e, '/')}
        >
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="トレンド" />
        </ListItem>
        <ListItem
          button
          selected={selectedPath === '/timeline'}
          onClick={e => handleListItemClick(e, '/timeline')}
        >
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="タイムライン" />
        </ListItem>
        <ListItem
          button
          selected={selectedPath === '/tag-feed'}
          onClick={e => handleListItemClick(e, '/tag-feed')}
        >
          <ListItemIcon>
            <LabelIcon />
          </ListItemIcon>
          <ListItemText primary="タグフィード" />
        </ListItem>
      </List>
    </div>
  );
};

export default HomeMenu;
