import unexpected from 'unexpected'
import unexpectedReact from 'unexpected-react'
import unexpedtedSinon from 'unexpected-sinon'

// configure test suite
unexpected.use(unexpectedReact)
unexpected.use(unexpedtedSinon)

// require source files
const sourceContext = require.context('../src', true, /\.jsx?$/)
sourceContext.keys().filter((key) => !key.match(/^\.\/index\.js/)).forEach(sourceContext)

// require test files
const testContext = require.context('.', true, /\.spec\.jsx?$/)
testContext.keys().forEach(testContext)
