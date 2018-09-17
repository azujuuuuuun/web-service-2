// @flow

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import type { FieldProps, FormProps } from 'redux-form';

type Props = {
  viewer: any,
  text: FieldProps,
  handleSubmit: FormProps,
};

const CommentForm = (props: Props) => {
  const { viewer, text, handleSubmit } = props;
  return (
    <div>
      <div>
        <Avatar src={viewer.avatarImgSrc} alt="アバター">
          {viewer.username}
        </Avatar>
        <span>コメントを投稿する</span>
      </div>
      <div>
        <TextField
          value={text.input.value}
          onChange={text.input.onChange}
          placeholder="コメントを入力してください"
          multiline
          rows="4"
        />
      </div>
      <div>
        <Button onClick={handleSubmit}>投稿</Button>
      </div>
    </div>
  );
};

export default CommentForm;
