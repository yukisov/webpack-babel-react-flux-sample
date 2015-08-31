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
    //preLoaders: [
    //  {
    //      test: /\.jsx?$/,
    //      loaders: 'jsx?harmony'
    //  },
    //  {
    //    test: /\.js$/,
    //    exclude: /node_modules/,
    //    loader: "eslint-loader"
    //  }
    //],
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
      //{
      //    test: /\.jsx?$/,
      //    loaders: 'jsx?harmony'
      //    //loaders: ['react-hot', 'jsx?harmony']
      //    //include: path.join(__dirname, 'src/js')
      //}
    ]
  },
  resolve: {
    // require()する時に拡張子を省略可能にします。
    extensions: ['', '.js', '.jsx', '.css']
  },
  //eslint: {
  //  configFile: './.eslintrc'
  //},
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
