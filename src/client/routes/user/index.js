// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import GlobalHeader from '../../components/GlobalHeader';
import NotFound from '../../components/NotFound';
import FollowButton from './FollowButton';
import UnfollowButton from './UnfollowButton';
import EditProfileLink from './EditProfileLink';
import FollowingTags from './FollowingTags';
import TableList from './TableList';
import Loading from '../../components/Loading';
import { fetchUserRequested } from '../../actions';
import type { Viewer } from '../../reducers/viewer';
import type { User } from '../../reducers/user';

type PProps = {
  user: User,
  isViewer: boolean,
  hasFollowed: boolean,
};

type CProps = {
  match: any,
  viewer: Viewer,
  user: User,
  fetchUserRequest: any,
};

const Img = styled.img`
  margin-bottom: 0.75rem;
  width: 100%;
`;

const Username = styled.h3`
  margin: 0;
`;

const UserPage = (props: PProps) => {
  const { user, isViewer, hasFollowed } = props;
  return (
    <div>
      <GlobalHeader />
      {!user.username ? (
        <NotFound />
      ) : (
        <Grid container justify="center" spacing={16}>
          <Grid item xs={3}>
            <Img src={user.avatarImgSrc} alt="アバター" />
            <Username>{`@${user.username}`}</Username>
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

class UserPageContainer extends React.Component<CProps> { // eslint-disable-line
  componentDidMount() {
    const { match, fetchUserRequest } = this.props;
    const { username } = match.params;
    fetchUserRequest(username);
  }

  render() {
    const { viewer, user } = this.props;
    const isViewer = viewer.id === user.id;
    const hasFollowed = viewer.followings.some(f => f.id === user.id);
    return (
      <Loading>
        <UserPage user={user} isViewer={isViewer} hasFollowed={hasFollowed} />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.viewer,
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchUserRequest: username => dispatch(fetchUserRequested({ username })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPageContainer);
