import React from 'react';
import Select from 'react-select';

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
  label: 'Exchange Currency:',
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
  label: 'Amount of Selected Currency to Exchange (e.g 10.99 for £10.99):'
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

class LFCPlaceOrder extends React.Component {

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
        <button onClick={this.handlePress.bind(this)}>Place Order!</button>
      </div>
    )
  }
}

LFCPlaceOrder.defaultProps = {
  label: 'Place Order:'
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
        <button onClick={this.handlePress.bind(this)}>Confirm!</button>
      </div>
    )
  }
}

LFCSubmit.defaultProps = {
  label: 'Confirm Order:'
}

class LFCOrderState extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.orderState}</p>
      </div>
    )
  }
}

LFCOrderState.propTypes = {
  orderState: React.PropTypes.string,
  label: React.PropTypes.string
}

LFCOrderState.defaultProps = {
  orderState: " ",
  label: 'Order State:'
}

export {LFCCurrency, LFCRate, LFCAmount, LFCEther, LFCPlaceOrder, LFCSubmit, LFCOrderState}
