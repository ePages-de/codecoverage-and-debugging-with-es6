/* eslint-env node */
'use strict'

const del = require('del')
const gulp = require('gulp')
const gulpUtil = require('gulp-util')
const path = require('path')

gulp.task('build', function (done) {
  del.sync('./build')

  const webpack = require('webpack')
  const webpackConfig = require('./webpack.config.js')({dev: false, hot: false})
  const compiler = webpack(webpackConfig)

  // run webpack compiler and make sure to fail, when there are webpack errors/warnings
  compiler.run((err, result) => {
    if (!err) {
      if (result.compilation.errors.length > 0) {
        done(result.compilation.errors[0])
      } else if (result.compilation.warnings.length > 0) {
        done(result.compilation.warnings[0])
      } else {
        done()
      }
    } else {
      done(err)
    }
  })
})

gulp.task('lint', function () {
  const gulpEslint = require('gulp-eslint')

  return gulp.src(['./*.js', './src/**/*.{js,jsx}', './test/**/*.{js,jsx}'])
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpEslint.failAfterError())
})

gulp.task('test-old', function (done) {
  process.env.NODE_ENV = 'test-old'
  del.sync('./coverage/old')

  const karma = require('karma')
  const server = new karma.Server({configFile: path.resolve('./karma-old.conf.js')}, done)

  server.start()
})

gulp.task('test-new', function (done) {
  process.env.NODE_ENV = 'test-new'
  del.sync('./coverage/new')

  const karma = require('karma')
  const server = new karma.Server({configFile: path.resolve('./karma-new.conf.js')}, done)

  server.start()
})

gulp.task('default', function (done) {
  const webpackDevServer = require('./webpack.devserver')
  const host = 'localhost'
  const port = 8000
  const hot = true

  webpackDevServer(host, port, hot, (err) => {
    if (!err) {
      gulpUtil.log(`Bound webpack dev-server to http://${host}:${port}`)
    }
  })
})

// ensure all subprocesses are killed after tasks have run or on interruption signals
gulp.doneCallback = (err) => process.exit(err ? 1 : 0)
process.on('SIGINT', () => process.exit(1))
process.on('SIGTERM', () => process.exit(1))
