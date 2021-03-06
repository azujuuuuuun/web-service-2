import React from 'react';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import rootReducer from '../client/reducers';
import Auth from '../client/Auth';
import Routing from '../client/routes';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const passport = require('./passport');
const router = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/dist', express.static(path.resolve(__dirname, '../../dist')));
app.use('/public', express.static(path.resolve(__dirname, '../../public')));
app.use(
  '/public/images',
  express.static(path.resolve(__dirname, '../../uploads')),
);

app.use(passport.initialize());

app.use(router);

const renderFullPage = (html, preloadedState) =>
  `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>web-service-2</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="/public/css/style.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c',
          )}
        </script>
        <script src="/dist/client.js"></script>
      </body>
    </html>
    `;

const handleRender = (req, res) => {
  const store = createStore(rootReducer);
  const context = {};
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Auth>
          <Routing />
        </Auth>
      </StaticRouter>
    </Provider>,
  );
  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));
};

app.use(handleRender);

app.listen(3000, () => {
  console.log('web-service-2 listening on port 3000!'); // eslint-disable-line no-console
});
