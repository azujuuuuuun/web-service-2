// @flow

import React from 'react';

import Loading from './LoadingContainer';
import IndexPage from '../components/IndexPage';

class IndexPageContainer extends React.Component<any, void> { // eslint-disable-line
  render() {
    return (
      <Loading>
        <IndexPage />
      </Loading>
    );
  }
}

export default IndexPageContainer;
