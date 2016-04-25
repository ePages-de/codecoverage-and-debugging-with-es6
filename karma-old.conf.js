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
        ],
        preLoaders: [
          {
            test: /\.jsx$/,
            exclude: [
              path.resolve('node_modules/'),
              path.resolve('src/')
            ],
            loader: 'babel'
          },
          {
            test: /\.jsx?$/,
            include: [
              path.resolve('src/')
            ],
            loader: 'isparta'
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
        {type: 'lcov', dir: 'coverage/old/'},
        {type: 'json', dir: 'coverage/old/', file: 'coverage.json'},
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
