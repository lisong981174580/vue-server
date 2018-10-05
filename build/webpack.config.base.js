const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, '../client/client-entry.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../public'),
    publicPath: 'http://127.0.0.1:8000/public/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
          test:/\.css$/,
          loader:"style-loader!css-loader!postcss-loader"
      },
      {
          test:/\.less$/,
          loader:"style-loader!css-loader!postcss-loader!less-loader"
      },

      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
          test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i,
          loader:'url-loader?limit=500000'
      },
      {
        test : /\.(mp3)(\?.*)?$/,
        loader : 'url-loader',
      }
    ]
  }
}

module.exports = config
