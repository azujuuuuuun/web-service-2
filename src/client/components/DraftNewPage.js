// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';
import type { FieldProps, FormProps } from 'redux-form';

import GlobalHeader from './GlobalHeader';
import EditorSubmit from '../containers/EditorSubmitContainer';

type Props = {
  title: FieldProps,
  tagNames: FieldProps,
  body: FieldProps,
  status: FieldProps,
  handleSubmit: FormProps,
};

const DraftNewPage = (props: Props) => {
  const { title, tagNames, body, status, handleSubmit } = props;
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
        <EditorSubmit status={status} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default DraftNewPage;
