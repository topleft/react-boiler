const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');

const ROOT_PATH = path.join(__dirname, '..');
const APP_PATH = path.join(__dirname, '..', 'src');
const BUILD_PATH = path.join(__dirname, '..', 'dist');


module.exports = {
  mode: 'production',
  entry: {
    index: ['@babel/polyfill', APP_PATH + '/index.js']
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
    },
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  },
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
    new HtmlWebpackPlugin({
      template: path.join(APP_PATH, 'template.html'),
      files: {
        css: [ 'styles.css' ],
        js: [ 'app.js' ]
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].styles.css',
      chunkFilename: '[id].[hash].css',
    })
  ],
};
