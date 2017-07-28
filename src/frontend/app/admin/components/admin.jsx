import React from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select';

class AdminAccount extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.result}</p>
      </div>
    )
  }
}

AdminAccount.propTypes = {
  result: PropTypes.string,
  label: PropTypes.string
}

class AdminFunds extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.result}</p>
      </div>
    )
  }
}

AdminFunds.propTypes = {
  result: PropTypes.string,
  label: PropTypes.string
}

class ContractFunds extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.result}</p>
      </div>
    )
  }
}

ContractFunds.propTypes = {
  result: PropTypes.string,
  label: PropTypes.string
}

ContractFunds.defaultProps = {
  label: 'Contract Account Funds (Ether):'
}

class FundContract extends React.Component {

  constructor(props) {
    super(props)
  }

  _handleFundContract(e) {
    this.props.parentFunc(e.target.value)
  }

  render() {
    return (
      <div className="textInput">
        <p>{this.props.label}
          <input
            type="text"
            placeholder={this.props.placeHolder}
            onChange={this._handleFundContract.bind(this)}
          />
        </p>
      </div>
    )
  }
}

FundContract.propTypes = {
  parentFunc: PropTypes.func,
  placeHolder: PropTypes.string,
  label: PropTypes.string
}

FundContract.defaultProps = {
  label: 'Amount of Ether to Send to Contract:'
}

class FundSubmit extends React.Component {

  constructor(props) {
    super(props);
  }

  _handlePress() {
    this.props.parentFunc()
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <button onClick={this._handlePress.bind(this)}>{this.props.buttonLabel}</button>
      </div>
    );
  }
}

FundSubmit.propTypes = {
  parentFunc:PropTypes.func,
  label:PropTypes.string,
  buttonLabel:PropTypes.string
}

export {AdminAccount, AdminFunds, ContractFunds, FundContract, FundSubmit}
