import React from 'react'
import PropTypes from 'prop-types'

// import {WithdrawCurrency, Amount, WithdrawAmount, WithdrawSubmit} from '../components/withdraw'

import {Heading, TextOutput, TextInput, TextAreaInput, TextSelect, TextSelectPlus, FormSubmit} from '../../components/form'
import AdminWithdrawHandler from '../../utils/adminWithdrawHandler'
import {AdminWithdrawStrings, CountryCodes} from '../../utils/outputStrings'

class Withdraw extends React.Component {

  constructor(props) {
    super(props)

    this.web3Handler = this.props.web3
    const contractHander = this.props.contract
    this.exchanger = contractHander.getExchanger()
    this.withdrawHandler = new AdminWithdrawHandler()

    const numCountryCodes = CountryCodes.codes.length
    let countryCodeSelections = []
    for (let i = 0; i < numCountryCodes; i++) {
      countryCodeSelections[i] = { value: i, label: CountryCodes.codes[i] }
    }

    this.defaultTO = {gas: 300000}

    const info = AdminWithdrawStrings.info

    this.state = {
      currencies: countryCodeSelections,
      amount: 0,
      info: info
    }
  }

  setWithdraw (_self, _result) {
    const currency = _self.withdrawHandler.getCurrency()
    const amount = _self.withdrawHandler.getWithdrawAmount()
    const info = 'Amount ' + amount + ' for Currency ' + currency + ' withdrawn. Transaction ID: ' + _result
    _self.setState({info: info})
    _self.withdrawHandler.reset()
  }

  setAmount (_self, _result) {
    const web3 = _self.web3Handler.getWeb3()
    const amount = web3.fromWei(_result,"ether").toNumber()
    _self.withdrawHandler.setAmount(amount)
    _self.setState({amount: amount})
  }

  _handleCurrency(selection) {
    //console.log("Getting deposited amount for currency " + selection.label)
    const currency = selection.label
    this.withdrawHandler.setCurrency(currency)
    let params = [currency]
    this.web3Handler.callParamHandler(this, this.exchanger.getDepositedAmount, params, this.setAmount, false)
  }

  _handleWithdrawAmount(value) {
    this.withdrawHandler.setWithdrawAmount(value)
  }

  _handleWithdraw() {
    if (this.withdrawHandler.checkSet()) {
      const web3 = this.web3Handler.getWeb3()
      const currency = this.withdrawHandler.getCurrency()
      const withdrawAmount = this.withdrawHandler.getWithdrawAmount()
      const thisWithdrawAmount = web3.toWei(withdrawAmount,"ether")
      let params = [currency, thisWithdrawAmount, this.defaultTO]
      this.web3Handler.callParamHandler(this, this.exchanger.withdraw, params, this.setWithdraw, false)
      params = [currency]
      this.web3Handler.callParamHandler(this, this.exchanger.getDepositedAmount, params, this.setAmount, false)
    }
  }

  render() {
    return (
      <div>
        <div className="info">
          <p>{this.state.info}</p>
          <hr />
        </div>
        <div>
          <TextSelect parentFunc={this._handleCurrency.bind(this)} placeHolder={AdminWithdrawStrings.currencyPlaceHolder} label={AdminWithdrawStrings.currencyLabel} selections={this.state.currencies} />
          <TextOutput label={AdminWithdrawStrings.amountLabel} result={this.state.amount}/>
          <TextInput parentFunc={this._handleWithdrawAmount.bind(this)} placeHolder={AdminWithdrawStrings.withdrawAmountPlaceholder} label={AdminWithdrawStrings.withdrawAmountLabel} />
          <FormSubmit parentFunc={this._handleWithdraw.bind(this)} label={AdminWithdrawStrings.withdrawSubmitLabel} buttonLabel={AdminWithdrawStrings.buttonLabel} />
        </div>
      </div>
    )
  }
}

Withdraw.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Withdraw
