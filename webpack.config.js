const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.png|.svg/,
        type: 'asset/resource',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [require.resolve('react-refresh/babel')],
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
};