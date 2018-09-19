// @flow

import { connect } from 'react-redux';

import FollowButton from '../components/FollowButton';
import { followRequested } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) => ({
  followRequest: user => dispatch(followRequested({ user })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FollowButton);
