import React, {Component, PropTypes} from 'react'

export default class ListView extends Component {
  static get propTypes () {
    return {
      items: PropTypes.arrayOf(PropTypes.string).isRequired
    }
  }

  render () {
    return (
      <div className='list-view'>
        {this.props.items.map((item, index) =>
          <div key={index} className='list-view-item'>
            {item}
          </div>
        )}
      </div>
    )
  }
}
