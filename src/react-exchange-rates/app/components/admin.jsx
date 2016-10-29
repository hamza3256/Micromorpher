import React from 'react';
import Select from 'react-select';

class AdminAccount extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.address}</p>
      </div>
    )
  }
}

AdminAccount.propTypes = {
  address: React.PropTypes.string,
  label: React.PropTypes.string
}

AdminAccount.defaultProps = {
  label: 'Admin Account:'
}

class AdminFunds extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.funds}</p>
      </div>
    )
  }
}

AdminFunds.propTypes = {
  funds: React.PropTypes.string,
  label: React.PropTypes.string
}

AdminFunds.defaultProps = {
  label: 'Admin Account Funds (Ether):'
}

class ContractFunds extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.funds}</p>
      </div>
    )
  }
}

ContractFunds.propTypes = {
  funds: React.PropTypes.string,
  label: React.PropTypes.string
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
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <input
          type="text"
          placeholder="Ether Amount"
          value={this.props.ether}
          onChange={this._handleFundContract.bind(this)}
        />
      </div>
    );
  }
}

FundContract.propTypes = {
  parentFunc: React.PropTypes.func,
  ether: React.PropTypes.string,
  label: React.PropTypes.string
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
        <button onClick={this._handlePress.bind(this)}>Fund Contract!</button>
      </div>
    );
  }
}

FundSubmit.defaultProps = {
  label: 'Send Ether to Contract:'
}

export {AdminAccount, AdminFunds, ContractFunds, FundContract, FundSubmit}