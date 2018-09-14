// @flow

import React from 'react';
import { Fields, reduxForm } from 'redux-form';

import NotificationsSetting from '../components/NotificationsSetting';
import { updateNotificationsRequested } from '../actions';

type Props = {
  handleSubmit: any,
};

class NotificationsSettingContainer extends React.Component<Props, void> { // eslint-disable-line
  render() {
    const { handleSubmit } = this.props;
    return (
      <Fields
        names={[
          'newsMail',
          'stockListMail',
          'editRequestMail',
          'editRequestWeb',
          'commentMail',
          'commentWeb',
          'mentionMail',
          'mentionWeb',
          'linkWeb',
          'likeWeb',
          'stockWeb',
          'followMail',
          'followWeb',
          'twitterWeb',
        ]}
        component={NotificationsSetting}
        handleSubmit={handleSubmit}
      />
    );
  }
}

const onSubmit = (values, dispatch) => {
  dispatch(updateNotificationsRequested(values));
};

export default reduxForm({
  form: 'email',
  onSubmit,
})(NotificationsSettingContainer);
