const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      applicationStyles: path.resolve('./app/styles/app.scss'),
      Main: path.resolve('./app/components/Main.jsx'),
      Navigation: path.resolve('./app/components/Navigation.jsx')
    }
  },
};