require('dotenv').config();
const HtmlPlugin = require('html-webpack-plugin');
const EmojiFaviconPlugin = require('emoji-favicon-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: ['@babel/polyfill', './index.js'],
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new EmojiFaviconPlugin('🔪'),
    new HtmlPlugin({
      title: 'Trevor Blades',
      template: 'index.html'
    }),
    new webpack.DefinePlugin({
      GITHUB_TOKEN: JSON.stringify(process.env.GITHUB_TOKEN)
    })
  ]
};
