import expect from 'unexpected'
import reduxMiddleware from '../../../src/examples/fat-arrows/reduxMiddleware'
import sinon from 'sinon'

describe('reduxMiddleware', function () {
  it('works', function () {
    const getState = sinon.spy(() => {})
    const next = sinon.spy(() => null)
    const action = {type: 'SOME_ACTION'}
    const middleware = reduxMiddleware()

    middleware({getState})(next)(action)

    expect(getState, 'was called once')
    expect(next, 'was called once')
    expect(next, 'to have calls satisfying', [
      {args: [action]}
    ])
  })
})
