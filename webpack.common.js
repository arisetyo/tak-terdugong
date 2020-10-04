/**
 * webpack config
 * @author: Arie M. Prasetyo (2020)
 */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
 
const port = 3000;
const host = 'localhost';
 
module.exports = {
  bail: true,
  entry: [
    __dirname + '/src/index.js',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    // important to make sure this library can be loaded to the Dugong framework
    libraryTarget: 'umd',
    library: 'sudah_kudugong'
  },
  module: {
    rules: [
      {
          // Transform JS files from ES2015/JSX to ES5.
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
      },
      {
        // CSS imports
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              },
              url: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                require('autoprefixer')()
              ]
            }
          }
        ],
      },
      {
        // load image files
        test: /\.(png|jpg|svg)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};