// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';

import GlobalHeader from '../containers/GlobalHeaderContainer';
import NotFound from './NotFound';
import FollowButton from '../containers/FollowButtonContainer';
import UnfollowButton from '../containers/UnfollowButtonContainer';
import EditProfileLink from './EditProfileLink';
import FollowingTags from './FollowingTags';
import TableList from './TableList';

type Props = {
  user: any,
  isViewer: boolean,
  hasFollowed: boolean,
};

const UserPage = (props: Props) => {
  const { user, isViewer, hasFollowed } = props;
  return (
    <div>
      <GlobalHeader />
      {!user.username ? (
        <NotFound />
      ) : (
        <Grid container justify="center" spacing={16}>
          <Grid item xs={3}>
            <img src={user.avatarImgSrc} alt="アバター" />
            <h3>{`@${user.username}`}</h3>
            {isViewer ? (
              <EditProfileLink />
            ) : (
              <div>
                {!hasFollowed ? (
                  <FollowButton user={user} />
                ) : (
                  <UnfollowButton userId={user.id} />
                )}
              </div>
            )}
            <FollowingTags tags={user.followingTags} />
          </Grid>
          <Grid item xs={7}>
            <TableList items={user.items} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default UserPage;
