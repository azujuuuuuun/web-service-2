// @flow

import React from 'react';
import { Fields, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Loading from './LoadingContainer';
import SettingProfilePage from '../components/SettingsProfilePage';
import { updateUserRequested } from '../actions';

type Props = {
  viewer: any,
  handleSubmit: any,
};

class SettingsProfileContainer extends React.Component<Props, void> { // eslint-disable-line
  render() {
    const { viewer, handleSubmit } = this.props;
    return (
      <Loading>
        <Fields
          names={[
            'firstName',
            'lastName',
            'web',
            'organization',
            'location',
            'description',
          ]}
          component={SettingProfilePage}
          viewer={viewer}
          handleSubmit={handleSubmit}
        />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.viewer,
});

const onSubmit = (values, dispatch) => {
  dispatch(updateUserRequested(values));
};

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'profile',
    onSubmit,
  }),
)(SettingsProfileContainer);
