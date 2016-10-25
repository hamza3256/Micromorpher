import React from 'react';
import Select from 'react-select';

class LFCAccounts extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleAccountChange(value) {
    this.props.parentFunc(value.label)       
  }

  render() {

    const accs = this.props.accounts.map(function(values) {
      return { value: values, label: values}
    })

    //console.log("lfc account is " + this.props.account)

    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <Select
          searchable={this.props.searchable}
          disabled={false}
          name='Select Account'
          options={accs}
          value={this.props.account}
          onChange={this._handleAccountChange.bind(this)}
        />
      </div>
    );
  }
}

LFCAccounts.propTypes = {
  parentFunc: React.PropTypes.func,
  accounts: React.PropTypes.array,
  account: React.PropTypes.string, 
  searchable: React.PropTypes.bool,
  label: React.PropTypes.string
}

LFCAccounts.defaultProps = {
  label: 'Accounts:',
  searchable: true
}

class LFCCurrency extends React.Component {
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

LFCCurrency.propTypes = {
  parentFunc: React.PropTypes.func,
  currencies: React.PropTypes.array,
  currency: React.PropTypes.string,
  searchable: React.PropTypes.bool,
  label: React.PropTypes.string
}

LFCCurrency.defaultProps = {
  label: 'Currency:',
  searchable: true,
}

class LFCRate extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.rate}</p>
      </div>
    )
  }
}

LFCRate.propTypes = {
  rate: React.PropTypes.number,
  label: React.PropTypes.string
}

LFCRate.defaultProps = {
  label: 'Exchange Rate (Amount of Selected Currency to Ether):'
}

class LFCAmount extends React.Component {

  constructor(props) {
    super(props)
  }

  handleAmountChange(e) {
    this.props.parentFunc(e.target.value)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <input
          type="text"
          placeholder="Currrency Amount"
          value={this.props.amount}
          onChange={this.handleAmountChange.bind(this)}
        />
      </div>
    )
  }
}

LFCAmount.propTypes = {
  parentFunc: React.PropTypes.func,
  amount: React.PropTypes.number,
  label: React.PropTypes.string
}

LFCAmount.defaultProps = {
  label: 'Selected Currency Amount:'
}

class LFCEther extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.ether}</p>
      </div>
    )
  }
}

LFCEther.propTypes = {
  ether: React.PropTypes.number,
  label: React.PropTypes.string
}

LFCEther.defaultProps = {
  label: 'Amount of Ether to Which the Currency Converts:'
}

class LFCSubmit extends React.Component {

  constructor(props) {
    super(props);
  }

  handlePress() {
    this.props.parentFunc()
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <button onClick={this.handlePress.bind(this)}>Do Exchange!</button>
      </div>
    )
  }
}

LFCAmount.propTypes = {
  parentFunc: React.PropTypes.func,
  label: React.PropTypes.string,
}

LFCSubmit.defaultProps = {
  label: 'Exchange:'
}

export {LFCCurrency, LFCAccounts, LFCRate, LFCAmount, LFCEther, LFCSubmit}
