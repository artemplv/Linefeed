const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

require('dotenv').config();

const devBundleOutput = path.join(__dirname, 'build');
const prodBundleOutput = path.join(__dirname, '../public');

function getConfig(isProd) {
  return {
    entry: [
      path.resolve(__dirname, 'src', 'index.js'),
    ],
    output: {
      path: isProd ? prodBundleOutput : devBundleOutput,
      filename: '[name].js',
    },
    devServer: {
      port: 3000,
      watchFiles: './src',
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          router: () => 'http://localhost:5000',
          logLevel: isProd ? 'silent' : 'debug',
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.s?[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { url: false },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.svg/,
          type: 'asset/inline',
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.json'],
      alias: {
        store: path.resolve(__dirname, 'src/store'),
        api: path.resolve(__dirname, 'src/api'),
        utils: path.resolve(__dirname, 'src/utils'),
        components: path.resolve(__dirname, 'src/components'),
        assets: path.resolve(__dirname, 'src/assets'),
        constants: path.resolve(__dirname, 'src/constants'),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        base: '/',
      }),
      new MiniCssExtractPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './public/manifest.json',
            to: isProd ? prodBundleOutput : devBundleOutput,
          },
        ],
      }),
    ],
    devtool: isProd ? 'source-map' : 'eval-source-map',
  };
}

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  const config = getConfig(isProd);

  return config;
};
