// @flow

import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';

type Props = {
  loading: boolean,
  children: React.Node,
};

class LoadingContainer extends React.Component<Props, void> { // eslint-disable-line
  render() {
    const { loading, children } = this.props;
    return loading ? <LinearProgress /> : children;
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(LoadingContainer);
