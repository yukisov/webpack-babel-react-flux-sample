var webpack = require('webpack'),
    path = require('path');

module.exports = {
  // webpackが読み込むファイルを指定します。
  entry: {
    // 下の output.filename で使用されている[name]には、"app" がセットされます。
    app: "./src/js/entry.js"
  },
  output: {
    path: './public/js',
    // publicPath は webpack-dev-server で自動コンパイルするために必要（URLにおけるJSファイルへのパスを書く）
    publicPath: '/js/',
    filename: "app.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
         test: /\.jsx?$/,
         exclude: /(node_modules|bower_components)/,
         loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    // require()する時に拡張子を省略可能にします。
    extensions: ['', '.js', '.jsx', '.css']
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
