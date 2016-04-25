import chuckNorrisGreeter from '../../../src/examples/imports/chuckNorrisGreeter'
import expect from 'unexpected'

describe('chuckNorrisGreeter', function () {
  it('greets Chuck Norris', function () {
    expect(chuckNorrisGreeter(), 'to equal', 'Hello, Chuck Norris!')
  })
})
