const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const $ = require('jquery');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname,
  mode: 'production',
  entry: {
    jsx: './src/components/index.jsx',
    lib: './src/lib/libjs.js',
    libcss: './src/lib/libcss.js',
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CleanWebpackPlugin(['dist']),
    new HTMLwebpackPlugin({
      //template: './src/html/index.html',
      title: 'Embroiders / Borduurders',
      meta: require('./meta.json'),
      favicon: './favicon.png',
    }),
    new UglifyJsPlugin({
      cache: true,
      sourceMap: true
    }),
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      IP: JSON.stringify('34.242.179.249')
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};