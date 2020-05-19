const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const URL_LOADER_SIZE_LIMIT = 8 * 1024;

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    path.resolve('./playground/config/polyfills'),
    path.resolve('./playground/entry')
  ],
  output: {
    path: path.resolve(__dirname, 'playground'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: URL_LOADER_SIZE_LIMIT,
              noquotes: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'playground/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 3001,
    hot: true
  }
};
