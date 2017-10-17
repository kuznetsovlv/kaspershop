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
    }
  })
];

const productPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true,
      unsafe: true
    }
  })
];


const config = {
  context: resolve(__dirname, 'src', 'web'),
  entry: './index',
  noinfo: true,
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
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
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'babel'
      },
      {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
      }
    ],
    // rules: [{
    //         test: /\.scss$/,
    //         use: [{
    //             loader: "style-loader" // creates style nodes from JS strings
    //         }, {
    //             loader: "css-loader" // translates CSS into CommonJS
    //         }, {
    //             loader: "sass-loader" // compiles Sass to CSS
    //         }]
    //     }]
  }
};

export default config;
