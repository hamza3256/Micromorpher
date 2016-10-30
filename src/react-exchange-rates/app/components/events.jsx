import React from 'react';
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
  results: React.PropTypes.string,
  label: React.PropTypes.string
}

Events.defaultProps = {
  label: 'Currency Exchange Events:'
}

export {Events}