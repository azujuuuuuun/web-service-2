// @flow

import React from 'react';
import { connect } from 'react-redux';

import Loading from './LoadingContainer';
import UserPage from '../components/UserPage';
import { fetchUserRequested } from '../actions';

type Props = {
  match: any,
  viewer: any,
  user: any,
  fetchUserRequest: any,
};

class UserPageContainer extends React.Component<Props, void> { // eslint-disable-line
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

const mapDispatchToProps = (dispatch: any) => ({
  fetchUserRequest: username => dispatch(fetchUserRequested({ username })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPageContainer);
