"use strict";

import webpack from 'webpack';
import path, { resolve } from 'path';
import getType from './getType';

const TYPE = getType();

const DEV = TYPE === "development";
const PRODUCT = TYPE === "product";

const plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      DEV: JSON.stringify(DEV),
      PRODUCT: JSON.stringify(PRODUCT)
    },
    $dirname: '__dirname'
  })
];

const productPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false,
      unsafe: true
    }
  })
];

const config =  {
  context: resolve(__dirname, 'src', 'server'),
  node: {
    __filename: false,
    __dirname: false
  },
  entry: './index',
  noInfo: true,
  target: 'node',
  output: {
    filename: 'server.js',
    path: resolve(__dirname, 'dist'),
    library: 'kasperskyShop',
    libraryTarget: 'umd'
  },
  watch: DEV,
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: DEV ? "cheap-source-map" : null,
  plugins: PRODUCT ? plugins.concat(productPlugins) : plugins,
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.js$/,
      loader: 'babel'
    },
    {
      exclude: /node_modules/,
      test: /\.js$/,
      loader: 'eslint-loader'
    }]
  }
};

export default config;
