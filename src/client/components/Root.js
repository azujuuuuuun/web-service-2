// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from '../history';
import Auth from '../containers/AuthContainer';
import Routing from '../containers/RoutingContainer';

type Props = {
  store: any,
};

const Root = (props: Props) => {
  const { store } = props;
  return (
    <Provider store={store}>
      {/* $FlowFixMe */}
      <Router history={history}>
        <Auth>
          <Routing />
        </Auth>
      </Router>
    </Provider>
  );
};

export default Root;
