/* eslint-env node */
'use strict'

const path = require('path')

module.exports = function (karmaConfig) {
  const config = {
    basePath: '.',
    frameworks: [
      'mocha'
    ],
    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: [
              path.resolve('node_modules/')
            ],
            loader: 'babel'
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
    },
    webpackMiddleware: {
      noInfo: true
    },
    files: [
      'test/test.js'
    ],
    preprocessors: {
      'test/test.js': ['webpack', 'sourcemap']
    },
    reporters: [
      'spec',
      'coverage'
    ],
    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage/new/'},
        {type: 'json', dir: 'coverage/new/', file: 'coverage.json'},
        {type: 'text-summary'}
      ]
    },
    browsers: [
      'Chrome'
    ],
    singleRun: true
  }

  karmaConfig.set(config)
}
