const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './app/app.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'My Electorn App',
    filename: 'index.html',
    template: 'app/index.ejs'
  })],
  module: {
    loaders: [
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|main.js)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals: [
    (function () {
      var IGNORES = [
        'electron',
        'fs',
        'player'
      ];
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })()
  ]
};