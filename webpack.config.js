const path = require('path');
require('babel-polyfill');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    }],
  },
  plugins: [
    new HardSourceWebpackPlugin(),
  ],
};
