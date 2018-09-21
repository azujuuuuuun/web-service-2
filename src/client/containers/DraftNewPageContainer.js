// @flow

import React from 'react';
import { Fields, reduxForm } from 'redux-form';

import Loading from './LoadingContainer';
import DraftNewPage from '../components/DraftNewPage';
import { postItemRequested } from '../actions';

type Props = {
  handleSubmit: any,
};

class DraftNewPageContainer extends React.Component<Props, void> { // eslint-disable-line
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
