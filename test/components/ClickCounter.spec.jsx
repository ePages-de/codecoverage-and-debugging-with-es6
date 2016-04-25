import ClickCounter from '../../src/components/ClickCounter'
import expect from 'unexpected'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

describe('ClickCounter', function () {
  it('respects initialCount prop', function () {
    const dom1 = TestUtils.renderIntoDocument(<ClickCounter />)
    expect(dom1, 'to have rendered', <button>Click to increase 0</button>)

    const dom2 = TestUtils.renderIntoDocument(<ClickCounter initialCount={5} />)
    expect(dom2, 'to have rendered', <button>Click to increase 5</button>)
  })

  it('increases counter on click', function () {
    const dom = TestUtils.renderIntoDocument(<ClickCounter />)
    const button = TestUtils.findRenderedDOMComponentWithTag(dom, 'button')

    TestUtils.Simulate.click(button)
    expect(dom, 'to have rendered', <button>Click to increase 1</button>)

    TestUtils.Simulate.click(button)
    expect(dom, 'to have rendered', <button>Click to increase 2</button>)
  })
})
