import React, {Component, PropTypes} from 'react'

export default class ClickCounter extends Component {
  static get propTypes () {
    return {
      initialCount: PropTypes.number
    }
  }

  static get defaultProps () {
    return {
      initialCount: 0
    }
  }

  constructor (props) {
    super(props)

    this.state = {count: props.initialCount}

    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState({count: this.state.count + 1})
  }

  render () {
    const {initialCount, ...other} = this.props // eslint-disable-line no-unused-vars
    const {count} = this.state
    const label = `Click to increase ${count}`
    return (
      <button {...other} onClick={this.onClick}>{label}</button>
    )
  }
}
