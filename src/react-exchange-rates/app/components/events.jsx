import React from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select';

class Events extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const text = this.props.results.split("\n").map(function(item) {
      return (
        <span>
          {item}
          <br/>
        </span>

      )
    })
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{text}</p>
      </div>
    )
  }
}

Events.propTypes = {
  results:PropTypes.string,
  label:PropTypes.string
}

export {Events}
