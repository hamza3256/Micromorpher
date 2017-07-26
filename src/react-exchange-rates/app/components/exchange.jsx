import React from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select';

class ExchangeCurrency extends React.Component {

  /* constructor(props) {
    super(props)
  } */

  _handleChange (value) {
    this.props.parentFunc(value)
  }

  render () {
    return (
      <div className="select">
        <p>{this.props.label}</p>
        <Select
          placeholder={this.props.placeHolder}
          searchable={this.props.searchable}
          disabled={this.props.disabled}
          clearable={this.props.clearable}
          options={this.props.selections}
          value={this.props.selection}
          onChange={this._handleChange.bind(this)}
        />
      </div>
    )
  }
}

ExchangeCurrency.propTypes = {
  parentFunc: PropTypes.func,
  selections: PropTypes.array,
  selection: PropTypes.number,
  searchable: PropTypes.bool,
  placeHolder: PropTypes.string,
  label: PropTypes.string
}

ExchangeCurrency.defaultProps = {
  disabled: false,
  clearable: true,
  searchable: true
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
      <div className="textInput">
        <p>{this.props.label}
          <input
            type="text"
            placeholder={this.props.placeHolder}
            onChange={this._handleRateChange.bind(this)}
          />
        </p>
      </div>
    );
  }
}

ExchangeRate.propTypes = {
  parentFunc: PropTypes.func,
  placeHolder: PropTypes.string,
  label: PropTypes.string
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
        <button onClick={this._handlePress.bind(this)}>{this.props.buttonLabel}</button>
      </div>
    );
  }
}

ExchangeSubmit.propTypes = {
  parentFunc:PropTypes.func,
  label:PropTypes.string,
  buttonLabel:PropTypes.string
}

class RateSubmitted extends React.Component {

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

RateSubmitted.propTypes = {
  label: PropTypes.string,
  result: PropTypes.string
}

export {ExchangeCurrency, ExchangeRate, ExchangeSubmit, RateSubmitted}
