const HtmlPlugin = require('html-webpack-plugin');
const EmojiFaviconPlugin = require('emoji-favicon-webpack-plugin');
const path = require('path');

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
      }
    ]
  },
  plugins: [
    new EmojiFaviconPlugin('🎃'),
    new HtmlPlugin({
      title: 'Trevor',
      template: 'index.html'
    })
  ]
};
