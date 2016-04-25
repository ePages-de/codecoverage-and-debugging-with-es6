import expect from 'unexpected'
import ListView from '../../../src/examples/jsx/ListView'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

describe('ListView', function () {
  it('renders', function () {
    const items = ['foo', 'bar']
    const dom = TestUtils.renderIntoDocument(
      <ListView items={items} />
    )

    expect(dom, 'to have rendered', (
      <div className='list-view'>
        <div className='list-view-item'>foo</div>
        <div className='list-view-item'>bar</div>
      </div>
    ))
  })
})
