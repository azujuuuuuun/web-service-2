// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Fields, reduxForm } from 'redux-form';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import type { FieldProps, FormProps } from 'redux-form';

import Loading from '../../components/Loading';
import { loginRequested } from '../../actions';

type PProps = {
  username: FieldProps,
  password: FieldProps,
  handleSubmit: FormProps,
};

type CProps = {
  handleSubmit: FormProps,
};

const LoginPage = (props: PProps) => {
  const { username, password, handleSubmit } = props;
  return (
    <div>
      <TextField
        value={username.input.value}
        onChange={username.input.onChange}
        placeholder="ユーザーネーム"
      />
      <TextField
        value={password.input.value}
        onChange={password.input.onChange}
        placeholder="パスワード"
      />
      <Button onClick={handleSubmit}>ログイン</Button>
    </div>
  );
};

class LoginPageContainer extends React.Component<CProps> { // eslint-disable-line
  render() {
    const { handleSubmit } = this.props;
    return (
      <Loading>
        <Fields
          names={['username', 'password']}
          component={LoginPage}
          handleSubmit={handleSubmit}
        />
      </Loading>
    );
  }
}

const onSubmit = (values, dispatch) => {
  const { username, password } = values;
  const hashDigest = Base64.stringify(sha256(password));
  dispatch(loginRequested({ username, password: hashDigest }));
};

export default reduxForm({
  form: 'login',
  onSubmit,
})(LoginPageContainer);
