/* eslint-env node */
'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = function (options) {
  options = Object.assign({
    hot: false,
    dev: false,
    host: undefined,
    port: undefined
  }, options)

  const config = {
    context: path.resolve('./src'),
    entry: {
      app: [
        './index.html',
        './index.js'
      ],
      vendor: [
        'es6-shim',
        'react',
        'react-dom'
      ]
    },
    output: {
      filename: 'app.js',
      path: path.resolve('./build')
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(options.dev ? 'development' : 'production')
      }),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /index\.html$/,
          loader: 'file?name=[name].[ext]'
        },
        {
          test: /\.json$/,
          loader: 'json'
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }

  if (options.dev) {
    config.devtool = 'inline-source-map'
  }

  if (options.hot) {
    config.plugins.unshift(new webpack.HotModuleReplacementPlugin())
    Object.keys(config.entry).forEach(function (entryKey) {
      if (!Array.isArray(config.entry[entryKey])) {
        config.entry[entryKey] = [config.entry[entryKey]]
      }
      config.entry[entryKey].unshift('webpack-dev-server/client?http://' + options.host + ':' + options.port, 'webpack/hot/dev-server')
    })
  }

  return config
}
