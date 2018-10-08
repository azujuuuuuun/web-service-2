// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Fields, reduxForm } from 'redux-form';
import type { FieldProps, FormProps } from 'redux-form';

import GlobalHeader from '../../components/organisms/GlobalHeader';
import EditorSubmit from './EditorSubmit';
import Loading from '../../components/Loading';
import { postItemRequested } from '../../actions';

type PProps = {
  title: FieldProps,
  tagNames: FieldProps,
  body: FieldProps,
  status: FieldProps,
  handleSubmit: FormProps,
};

type CProps = {
  handleSubmit: FormProps,
};

const DraftNewPage = (props: PProps) => {
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

class DraftNewPageContainer extends React.Component<CProps, void> { // eslint-disable-line
  render() {
    const { handleSubmit } = this.props;
    return (
      <Loading>
        <Fields
          names={['title', 'tagNames', 'body', 'status']}
          component={DraftNewPage}
          handleSubmit={handleSubmit}
        />
      </Loading>
    );
  }
}

const onSubmit = (values, dispatch) => {
  const { title, tagNames, body, status } = values;
  dispatch(postItemRequested({ title, tagNames, body, status }));
};

export default reduxForm({
  form: 'item',
  initialValues: { status: 'posted' },
  onSubmit,
})(DraftNewPageContainer);
