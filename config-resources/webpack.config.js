'use strict';

const path = require('path');
const webpack = require('webpack');
const mergeConfig = require('webpack-merge');

const dirs = {
  src: path.resolve('src'),
  dist: path.resolve('dist'),
  assets: path.resolve('assets'),
};


const base = {
  context: dirs.src,
  entry: [
    'whatwg-fetch',
    'url-polyfill',
    './index.js',
  ],
  output: {
    path: dirs.dist,
    filename: '[name]_[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { sourceMap: true },
        }],
      },
    ],
  },

  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};


const environments = {
  development: {
    mode: 'development',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  },

  production: { mode: 'production' },
};


module.exports = function webpackConfig(env) {
  return mergeConfig(base, environments[env]);
};
