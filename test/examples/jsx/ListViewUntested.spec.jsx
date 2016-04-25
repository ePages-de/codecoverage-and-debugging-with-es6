import expect from 'unexpected'
import ListViewUntested from '../../../src/examples/jsx/ListViewUntested'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

describe('ListViewUntested', function () {
  it.skip('renders', function () {
    const items = ['foo', 'bar']
    const dom = TestUtils.renderIntoDocument(
      <ListViewUntested items={items} />
    )

    expect(dom, 'to have rendered', (
      <div className='list-view'>
        <div className='list-view-item'>foo</div>
        <div className='list-view-item'>bar</div>
      </div>
    ))
  })
})
