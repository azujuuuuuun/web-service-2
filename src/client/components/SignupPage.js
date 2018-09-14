// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import type { FieldProps, FormProps } from 'redux-form';

type Props = {
  username: FieldProps,
  password: FieldProps,
  handleSubmit: FormProps,
};

const SignupPage = (props: Props) => {
  const {
    username,
    password,
    handleSubmit,
  } = props;
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
      <Button
        onClick={handleSubmit}
      >
        サインアップ
      </Button>
    </div>
  );
};

export default SignupPage;
