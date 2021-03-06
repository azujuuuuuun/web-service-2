// @flow

import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import type { Dispatch } from 'redux';

import { authenticateRequested } from './actions';

type Props = {
  authenticateRequest: any,
  children: React.Node,
};

class AuthContainer extends React.Component<Props, void> {
  componentDidMount() {
    const { authenticateRequest } = this.props;
    authenticateRequest();
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  authenticateRequest: () => dispatch(authenticateRequested()),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(AuthContainer);
