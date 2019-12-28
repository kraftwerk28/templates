'use strict';

const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CSSExtractPlugin = require('mini-css-extract-plugin');

const DEV = process.env.NODE_ENV !== 'production';

const cfg = {
  entry: path.resolve('src/'),
  output: {
    path: path.resolve('dist/'),
    filename: 'index.js'
  },
  resolve: { extensions: ['.js', '.svelte'] },
  resolve: {
    alias: {
      components: path.resolve('src/components'),
      scss: path.resolve('src/assets/scss')
    },
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          DEV ? 'style-loader' : CSSExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
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
