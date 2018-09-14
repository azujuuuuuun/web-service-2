// @flow

import React from 'react';
import { Fields, reduxForm } from 'redux-form';

import EmailSetting from '../components/EmailSetting';
import { updateUserRequested } from '../actions';

type Props = {
  handleSubmit: any,
};

class EmailSettingContainer extends React.Component<Props, void> { // eslint-disable-line
  render() {
    const { handleSubmit } = this.props;
    return (
      <Fields
        names={['email']}
        component={EmailSetting}
        handleSubmit={handleSubmit}
      />
    );
  }
}

const onSubmit = (values, dispatch) => {
  const { email } = values;
  dispatch(updateUserRequested({ email }));
};

export default reduxForm({
  form: 'email',
  onSubmit,
})(EmailSettingContainer);
