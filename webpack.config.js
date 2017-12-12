var path = require('path')

var config = [
  {
    entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './app/admin/index.jsx'
    ]
    },
    output: {
      path: path.resolve(__dirname, 'build/admin'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          include: path.resolve(__dirname, 'app'),
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader'
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      ]
    }
  },
  {
    entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './app/exchanger/index.jsx'
    ]
    },
    output: {
      path: path.resolve(__dirname, 'build/exchanger'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          include: path.resolve(__dirname, 'app'),
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader'
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      ]
    }
  }
]

module.exports = config
