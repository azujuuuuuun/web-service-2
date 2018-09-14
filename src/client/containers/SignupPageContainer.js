// @flow

import React from 'react';
import { Fields, reduxForm } from 'redux-form';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

import Loading from './LoadingContainer';
import SignupPage from '../components/SignupPage';
import { signupRequested } from '../actions';

type Props = {
  handleSubmit: any,
};

class SignupPageContainer extends React.Component<Props, void> { // eslint-disable-line
  render() {
    const { handleSubmit } = this.props;
    return (
      <Loading>
        <Fields
          names={['username', 'password']}
          component={SignupPage}
          handleSubmit={handleSubmit}
        />
      </Loading>
    );
  }
}

const onSubmit = (values, dispatch) => {
  const { username, password } = values;
  const hashDigest = Base64.stringify(sha256(password));
  dispatch(signupRequested({ username, password: hashDigest }));
};

export default reduxForm({
  form: 'signup',
  onSubmit,
})(SignupPageContainer);
