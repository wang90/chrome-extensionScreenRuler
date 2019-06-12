
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'app': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].js',
    libraryTarget : 'var'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ],
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
    ],
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by bitwater, welcome to bit world.'),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['exports', 'require', 'jquery', 'jQuery', 'Raven'],
        mangle: false
        // 以上变量‘$super’, ‘$’, ‘exports’ or ‘require’，不会被混淆
      },
      compress: {
        warnings: false
      }
    })
  ],
};