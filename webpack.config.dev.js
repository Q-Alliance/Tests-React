import webpack from 'webpack';
const path = require('path');

export default {
  devtool: 'cheap-module-eval-source-map',
  debug: true,
  noInfo: true,
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/dev-server',
    'babel-polyfill',
    `isomorphic-fetch`,
    `${__dirname}/app/index.js`
  ],
  output: {
    path: `${__dirname}/public/dist`,
    publicPath: 'http://localhost:9000/dist/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'app'),
        loaders: [
          'style',
          'css?sourceMap',
          'sass?sourceMap'
        ]
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=10000000'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?(\?\d+)?$/,
        loader: "file-loader?name=/fonts/[name].[ext]"
      }
    ]
  }
};
