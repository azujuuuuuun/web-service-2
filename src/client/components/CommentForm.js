// @flow

import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import type { FieldProps, FormProps } from 'redux-form';

type Props = {
  viewer: any,
  text: FieldProps,
  handleSubmit: FormProps,
};

const Header = styled.div`
  margin-bottom: 0;
`;

const AvatarWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const CommentForm = (props: Props) => {
  const { viewer, text, handleSubmit } = props;
  return (
    <div>
      <Header>
        <AvatarWrapper>
          <Avatar src={viewer.avatarImgSrc} alt="アバター">
            {viewer.username}
          </Avatar>
        </AvatarWrapper>
        <span>コメントを投稿する</span>
      </Header>
      <div>
        <TextField
          value={text.input.value}
          onChange={text.input.onChange}
          placeholder="コメントを入力してください"
          multiline
          rows="4"
          fullWidth
        />
      </div>
      <div>
        <Button onClick={handleSubmit}>投稿</Button>
      </div>
    </div>
  );
};

export default CommentForm;
