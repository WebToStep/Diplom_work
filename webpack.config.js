/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable indent */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = ext => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './js/index.js',
  output: {
    filename: `js/${filename('js')}`,
    path: path.resolve(__dirname, 'app'),
    publicPath: ''
  },
  stats: {
    children: true,
    chunks: true,
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'app'),
    open: true,
    hot: true,
    compress: true,
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/balkony.html'),
      filename: 'balkony.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/kuhni.html'),
      filename: 'kuhni.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: `./css/${filename('css')}`,
    // }),

    // при наличие assets копируем
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/fonts'), to: path.resolve(__dirname, 'app/fonts') }
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/images'), to: path.resolve(__dirname, 'app/images') }
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/css'), to: path.resolve(__dirname, 'app/css') }
      ]
    }),
  ],
  // module: {
  //   rules: [
  //     // {
  //     //   test: /\.html$/,
  //     //   loader: 'html-loader',
  //     // },
  //     // {
  //     //   test: /\.css$/i,
  //     //   use: [
  //     //     MiniCssExtractPlugin.loader, "css-loader"],
  //     // },
  //     // {
  //     //   test: /\.s[as]ss$/i,
  //     //   use: [MiniCssExtractPlugin.loader, "css-loader"],
  //     // },
  //     // {
  //     //   test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
  //     //   use: [{
  //     //     loader: 'file-loader',
  //     //     options: {
  //     //       name: '[path][name].[ext]'
  //     //     }
  //     //   }],
  //     // },
  //   ],
  // },
};
