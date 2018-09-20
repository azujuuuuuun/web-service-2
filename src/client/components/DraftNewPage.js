// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import type { FieldProps, FormProps } from 'redux-form';

import GlobalHeader from '../containers/GlobalHeaderContainer';

type Props = {
  title: FieldProps,
  tagNames: FieldProps,
  body: FieldProps,
  handleSubmit: FormProps,
};

const DraftNewPage = (props: Props) => {
  const { title, tagNames, body, handleSubmit } = props;
  return (
    <div>
      <GlobalHeader />
      <div>
        <div>
          <TextField
            value={title.input.value}
            onChange={title.input.onChange}
            placeholder="タイトル"
            fullWidth
          />
        </div>
        <div>
          <TextField
            value={tagNames.input.value}
            onChange={tagNames.input.onChange}
            placeholder="プログラミング技術に関連するタグをスペース区切りで5つまで入力（例: Ruby Rails:4.2.0）"
            fullWidth
          />
        </div>
        <div>
          <TextField
            value={body.input.value}
            onChange={body.input.onChange}
            placeholder="プログラミング知識をMarkdown法で書いて共有しよう"
            multiline
            rows="18"
            fullWidth
          />
        </div>
        <div>
          <Button onClick={handleSubmit}>Qiitaに投稿</Button>
        </div>
      </div>
    </div>
  );
};

export default DraftNewPage;
