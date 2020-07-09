const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appHtmlTitle = 'Admin';
const IS_DEV = process.env.NODE_ENV === 'dev';

module.exports = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './example/index.js',
  ],
  output: {
    pathinfo: true,
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      styles: path.join(__dirname, 'styles'),
      fonts: path.join(__dirname, 'assets', 'fonts'),
    },
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    // proxy: {
    //   "/auth/local": "http://localhost:9000",
    //   "/api": "http://localhost:9000"
    // },
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    minimize: false,
    // minimizer: [new TerserPlugin()],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      IS_DEV,
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
      moment: 'moment',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      title: appHtmlTitle,
    }),
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]--[hash:base64:5]',
            },
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              url: false,
              name: '[name].[ext]',
              outputPath: './public/fonts/',
            },
          },
        ],
      },
    ],
  },
};
