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

class ExchangeCurrency extends React.Component {

  constructor(props) {
    super(props)
  }

  _handleCurrencyChange(value) {
    this.props.parentFunc(value.label)    
  }

  render() {
    
    const currs = this.props.currencies.map(function(values) {
      return { value: values, label: values}
    })

    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <Select
          searchable={this.props.searchable}
          disabled={false}
          name='Select Currency'
          options={currs}
          value={this.props.currency}
          onChange={this._handleCurrencyChange.bind(this)}
        />
      </div>
    );
  }
}

ExchangeCurrency.propTypes = {
  parentFunc: React.PropTypes.func,
  currencies: React.PropTypes.array,
  currency: React.PropTypes.string,
  searchable: React.PropTypes.bool,
  label: React.PropTypes.string
}

ExchangeCurrency.defaultProps = {
  label: 'Currency:',
  searchable: true,
}

class ExchangeRate extends React.Component {

  constructor(props) {
    super(props)
  }

  _handleRateChange(e) {
    this.props.parentFunc(e.target.value)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <input
          type="text"
          placeholder="Exchange Rate"
          value={this.props.rate}
          onChange={this._handleRateChange.bind(this)}
        />
      </div>
    );
  }
}

ExchangeRate.propTypes = {
  parentFunc: React.PropTypes.func,
  rate: React.PropTypes.number,
  label: React.PropTypes.string
}

ExchangeRate.defaultProps = {
  label: 'Exchange Rate (Amount of Selected Currency to Ether):'
}

class ExchangeSubmit extends React.Component {

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
        <button onClick={this._handlePress.bind(this)}>Set Rate!</button>
      </div>
    );
  }
}

ExchangeSubmit.defaultProps = {
  label: 'Set Exchange Rate:'
}

export {AdminAccount, AdminFunds, ContractFunds, FundContract, FundSubmit, ExchangeCurrency, ExchangeRate, ExchangeSubmit}
