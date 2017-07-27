import React from 'react';
import PropTypes from 'prop-types'

class Account extends React.Component {

  /* constructor(props) {
    super(props)
  } */

  render () {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.result}</p>
      </div>
    )
  }
}

Account.propTypes = {
  label: PropTypes.string,
  result: PropTypes.string
}

class AccountFunds extends React.Component {

  /* constructor(props) {
    super(props)
  } */

  render () {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.result}</p>
      </div>
    )
  }
}

AccountFunds.propTypes = {
  label: PropTypes.string,
  result: PropTypes.string
}

export {Account, AccountFunds}
