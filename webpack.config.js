'use strict';

const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const preprocessOptions = require('./svelte.config');

const cfg = {
  entry: path.resolve('src/'),
  output: {
    path: path.resolve('dist/'),
    filename: 'index.js'
  },
  resolve: { extensions: ['.js', '.svelte'] },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        loader: 'svelte-loader',
        options: preprocessOptions
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve('src/assets/index.html')
    })
  ],
  devServer: {
    stats: 'minimal'
  }
};

module.exports = () => {
  cfg.mode = process.env.NODE_ENV || 'development';
  return cfg;
};
