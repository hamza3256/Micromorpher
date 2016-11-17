var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/client/public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: [
	APP_DIR + '/index.jsx'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
	exclude: /node_modules/,
        loader : 'babel',
      },
      {
	test : /\.json?$/,
        loader : 'json-loader'
      }
    ]
  },
};

module.exports = config;