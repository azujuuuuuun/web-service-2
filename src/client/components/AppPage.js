// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import GlobalHeader from '../containers/GlobalHeaderContainer';

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
          {items.map(i => (
            <div key={i.id}>
              <Avatar src={i.user.avatarImgSrc}>
                {i.user.username}
              </Avatar>
              <div>
                <Link to={`/${i.user.username}/items/${i.id}`}>
                  {i.title}
                </Link>
              </div>
              <div>
                <span>{i.user.username}</span>
                <span>{i.updatedAt}</span>
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default AppPage;
