'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist'
  },
  watch: true,

  devtool: "source-map"
};