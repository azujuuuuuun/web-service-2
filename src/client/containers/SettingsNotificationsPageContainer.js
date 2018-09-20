// @flow

import React from 'react';
import { connect } from 'react-redux';

import Loading from './LoadingContainer';
import SettingsNotificationsPage from '../components/SettingsNotificationsPage';

type Props = {
  viewer: any,
};

class SettingsNotificationsPageContainer extends React.Component<Props, void> { // eslint-disable-line
  render() {
    const { viewer } = this.props;
    return (
      <Loading>
        <SettingsNotificationsPage viewer={viewer} />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.viewer,
});

export default connect(mapStateToProps)(SettingsNotificationsPageContainer);
