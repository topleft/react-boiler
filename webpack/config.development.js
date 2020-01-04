const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const APP_PATH = path.join(__dirname, '..', 'src');
const BUILD_PATH = path.join(__dirname, '..', 'dist');


module.exports = {
  mode: 'development',
  entry: {
    index: ['@babel/polyfill', APP_PATH + '/index.js']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
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
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
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
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: path.join(APP_PATH, 'template.html')}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    })
  ],
  devServer: {
    contentBase: BUILD_PATH,
    historyApiFallback: true
  }
};
