import React from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select';

class WithdrawCurrency extends React.Component {

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

WithdrawCurrency.propTypes = {
  parentFunc: PropTypes.func,
  selections: PropTypes.array,
  selection: PropTypes.number,
  searchable: PropTypes.bool,
  placeHolder: PropTypes.string,
  label: PropTypes.string
}

WithdrawCurrency.defaultProps = {
  disabled: false,
  clearable: true,
  searchable: true
}

class Amount extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.result}</p>
      </div>
    )
  }
}

Amount.propTypes = {
  result:PropTypes.number,
  label:PropTypes.string
}

class WithdrawAmount extends React.Component {

  constructor(props) {
    super(props)
  }

  _handleAmountChange(e) {
    this.props.parentFunc(e.target.value)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <input
          type="text"
          placeholder="Withdraw Amount"
          value={this.props.withdrawAmount}
          onChange={this._handleAmountChange.bind(this)}
        />
      </div>
    )
  }
}

WithdrawAmount.propTypes = {
  parentFunc:PropTypes.func,
  withdrawAmount:PropTypes.number,
  label:PropTypes.string
}

class WithdrawSubmit extends React.Component {

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

export {WithdrawCurrency, Amount, WithdrawAmount, WithdrawSubmit}
