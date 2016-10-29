import React from 'react';
import Select from 'react-select';

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

ExchangeSubmit.propTypes = {
  parentFunc: React.PropTypes.func,
  label: React.PropTypes.string
}

ExchangeSubmit.defaultProps = {
  label: 'Set Exchange Rate:'
}

export {ExchangeCurrency, ExchangeRate, ExchangeSubmit}
