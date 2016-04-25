import ClickCounter from './ClickCounter'
import React, {Component} from 'react'

export default class App extends Component {
  render () {
    return (
      <div>
        <div>App</div>
        <ClickCounter initialCount={0} />
      </div>
    )
  }
}
