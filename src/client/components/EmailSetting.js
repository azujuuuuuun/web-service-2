// @flow

import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import type { FieldProps, FormProps } from 'redux-form';

type Props = {
  email: FieldProps,
  handleSubmit: FormProps,
};

const EmailSetting = (props: Props) => {
  const { email, handleSubmit } = props;
  return (
    <div>
      <div>
        <MailOutlineIcon />
        <span>メールアドレス設定</span>
      </div>
      <div>メールアドレス</div>
      <TextField
        value={email.input.value}
        onChange={email.input.onChange}
      />
      <Button onClick={handleSubmit}>
        保存する
      </Button>
    </div>
  );
};

export default EmailSetting;
