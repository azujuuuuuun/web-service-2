// @flow

import React from 'react';
import { Fields, reduxForm } from 'redux-form';

import CommentForm from '../components/CommentForm';
import { postCommentRequested } from '../actions';

class CommentFormContainer extends React.Component<any, void> { // eslint-disable-line
  render() {
    const { viewer, handleSubmit } = this.props;
    return (
      <Fields
        names={['text']}
        component={CommentForm}
        viewer={viewer}
        handleSubmit={handleSubmit}
      />
    );
  }
}

const onSubmit = (values, dispatch, props) => {
  const { text } = values;
  const { itemId } = props.match.params;
  dispatch(postCommentRequested({ text, itemId }));
};

export default reduxForm({
  form: 'comment',
  onSubmit,
})(CommentFormContainer);
