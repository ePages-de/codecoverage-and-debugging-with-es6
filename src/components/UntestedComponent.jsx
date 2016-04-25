import React, {Component, PropTypes} from 'react'

export default class UntestedComponent extends Component {
  static get propTypes () {
    return {
      label: PropTypes.string.isRequired
    }
  }

  render () {
    const {label} = this.props
    return (
      <div>{label}</div>
    )
  }
}
