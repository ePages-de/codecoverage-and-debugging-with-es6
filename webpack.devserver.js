/* eslint-env node */
'use strict'

const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackDevServer = require('webpack-dev-server')

module.exports = function (host, port, hot, done) {
  const compiler = webpack(webpackConfig({host: host, port: port, hot: hot, dev: true}))
  const server = new WebpackDevServer(compiler, {
    contentBase: './src',
    inline: true,
    hot: hot,
    historyApiFallback: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      modules: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      reasons: false,
      cached: true,
      chunkOrigins: true,
      children: false
    }
  })

  // call done callback when first build has finished (or when there is an error)
  let valid = false
  server.listen(port, host, (err) => err ? done(err) : null)
  compiler.plugin('done', function () {
    if (!valid) {
      valid = true
      done()
    }
  })
}
