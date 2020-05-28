/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = () => {
  return merge([
      {
        devServer: {
          port: 3000,
          historyApiFallback: true,
          proxy: {
            '/api': {
              target: process.env.API_HOST || 'http://localhost:4200',
              pathRewrite: {'^/api' : ''}
            }
          },
          hot: true,
          contentBase: './build',
        },

        entry: ['@babel/polyfill', APP_DIR],
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            },
            {
              test: /\.mdx?$/,
              use: [
                'babel-loader',
                '@mdx-js/loader'
              ]
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ]
        },
        plugins: [
          // new BundleAnalyzerPlugin(),
          new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
          }),
          new CopyWebpackPlugin({ 
            patterns: [
              { from: 'public', to: 'dist' }
            ]
          }),
          new webpack.HotModuleReplacementPlugin(),
        ],
        output: {
          filename: '[name].bundle.js',
          chunkFilename: '[name].chunk.bundle.js',
          path: path.resolve(__dirname, '..', 'dist'),
          publicPath: '/',
        }
    }
  ])
};