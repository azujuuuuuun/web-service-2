// @flow

import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Fields, reduxForm } from 'redux-form';
import type { FieldProps, FormProps } from 'redux-form';

import { updateUserRequested } from '../../actions';

type PProps = {
  email: FieldProps,
  handleSubmit: FormProps,
};

type CProps = {
  handleSubmit: any,
};

const EmailSetting = (props: PProps) => {
  const { email, handleSubmit } = props;
  return (
    <div>
      <div>
        <MailOutlineIcon />
        <span>メールアドレス設定</span>
      </div>
      <div>メールアドレス</div>
      <TextField value={email.input.value} onChange={email.input.onChange} />
      <Button onClick={handleSubmit}>保存する</Button>
    </div>
  );
};

class EmailSettingContainer extends React.Component<CProps> { // eslint-disable-line
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
