const path = require('path');
const SRC = path.join(__dirname, 'src/');
const NODE_MODULES = path.join(__dirname, 'node_modules/');

const config = {
  entry: './src',
  output: {
    path: './app/public/js',
    filename: 'main.js',
  },
  resolve: {
    root: [SRC, NODE_MODULES],
    alias: path.join(SRC, 'actions/'),
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;