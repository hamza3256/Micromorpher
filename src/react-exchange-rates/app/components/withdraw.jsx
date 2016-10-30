import React from 'react';
import Select from 'react-select';

class Currency extends React.Component {
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

Currency.propTypes = {
  parentFunc: React.PropTypes.func,
  currencies: React.PropTypes.array,
  currency: React.PropTypes.string,
  searchable: React.PropTypes.bool,
  label: React.PropTypes.string
}

Currency.defaultProps = {
  label: 'Deposited Currency:',
  searchable: true,
}


class Amount extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.amount}</p>
      </div>
    )
  }
}

Amount.propTypes = {
  rate: React.PropTypes.number,
  label: React.PropTypes.string
}

Amount.defaultProps = {
  label: 'Deposited Amount:'
}          

class WithdrawAmount extends React.Component {

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
          value={this.props.withdrawAmount}
          onChange={this.handleAmountChange.bind(this)}
        />
      </div>
    )
  }
}

WithdrawAmount.propTypes = {
  parentFunc: React.PropTypes.func,
  withdrawAmount: React.PropTypes.number,
  label: React.PropTypes.string
}

WithdrawAmount.defaultProps = {
  label: 'Amount of Selected Currency to Withdraw (e.g 10.99 for £10.99):'
}

class Withdraw extends React.Component {

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
        <button onClick={this._handlePress.bind(this)}>Confirm!</button>
      </div>
    )
  }
}

Withdraw.defaultProps = {
  label: 'Confirm Withdraw:'
}

export {Currency, Amount, WithdrawAmount, Withdraw}
