const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const ROOT_PATH = path.join(__dirname, '..');
const APP_PATH = path.join(__dirname, '..', 'src');
const VENDOR_PATH = path.join(__dirname, '..', 'node_modules');
const BUILD_PATH = path.join(__dirname, '..', 'dist');


module.exports = {
  mode: 'production',
  entry: {
    index: ['babel-polyfill', APP_PATH + '/index.js']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$|\.css?$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loaders: ['url-loader?limit=25000', 'img-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=20000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [VENDOR_PATH],
  },
  plugins: [
    new CleanWebpackPlugin([BUILD_PATH], { root: ROOT_PATH }),
    new HtmlWebpackPlugin()
  ],
};
