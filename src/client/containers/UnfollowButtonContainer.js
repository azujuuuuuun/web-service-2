// @flow

import { connect } from 'react-redux';

import UnfollowButton from '../components/UnfollowButton';
import { unfollowRequested } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) => ({
  unfollowRequest: followedId => dispatch(unfollowRequested({ followedId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnfollowButton);
