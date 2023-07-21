const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

require('dotenv').config();

const config = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
    // path.resolve(__dirname, 'src', 'index.scss'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  devServer: {
    port: 3000,
    watchFiles: './src',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      // {
      //   test: /\.s?[ac]ss$/, // applies to css/scss/sass files
      //   use: [
      //     MiniCssExtractPlugin.loader, // create bundled css file
      //     {
      //       loader: 'css-loader', // resolves @import statements
      //       options: { url: false }, // don't resolve url() statements
      //     },
      //     'sass-loader', // compiles sass to css
      //   ],
      // },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      // 'process.env.variable': JSON.stringify(process.env.variable),
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  return config;
};
