import React from 'react'
import PropTypes from 'prop-types'

import {WithdrawCurrency, Amount, WithdrawAmount, WithdrawSubmit, WithdrawSubmitted} from '../components/withdraw'
import AdminWithdrawHandler from '../../utils/adminWithdrawHandler'
import {AdminWithdrawStrings, CountryCodes} from '../../utils/outputStrings'

class Withdraw extends React.Component {

  constructor(props) {
    super(props)

    this.web3Handler = this.props.web3
    const contractHander = this.props.contract
    this.exchanger = contractHander.getExchanger()
    this.withdrawHandler = new WithdrawHandler()

    const numCountryCodes = CountryCodes.codes.length
    let countryCodeSelections = []
    for (let i = 0; i < numCountryCodes; i++) {
      countryCodeSelections[i] = { value: i, label: CountryCodes.codes[i] }
    }

    this.defaultTO = {gas: 300000}

    this.state = {
      currencies: countryCodeSelections,
      amount: 0,
      result: ""
    }

    //this._withdrawnEvent()
  }

  /* _withdrawnEvent() {

    //event Withdrawn(string code, uint256 value);

    const web3 = this.state.web3
    const exchanger = this.state.exchanger
    const thisJs = this
    const withdrawn = this.state.withdrawn

    withdrawn.watch(function(error, result) {
      if (!error) {

        const stateCurrency = thisJs.state.currency
        const thisCurrency = result.args.code
        console.log("This Currency is " + thisCurrency + " State currency is " + stateCurrency)
        if (stateCurrency == thisCurrency ) {
          const currentAmount = thisJs.state.amount
          const amountWithdrawn = web3.fromWei(result.args.value.toNumber())
          console.log("Amount withdrawn for currency " + stateCurrency + " is " + amountWithdrawn)
          const newAmount = currentAmount - amountWithdrawn
          thisJs.setState({amount: newAmount})
          thisJs.setState({withdrawAmount: 0})
        }
      } else {
         console.error(result)
      }
    })
  } */

  setWithdraw (_self, _result) {
    _self.setState({result: _result})
    _self.withdrawHandler.reset()
  }

  setAmount (_self, _result) {
    const amount = _self.web3Handler.fromWei(_result,"ether").toNumber()
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
      params = [currency, thisWithdrawAmount, this.defaultTO]
      this.web3Handler.callParamHandler(this, this.exchanger.withdraw, params, this.setWithdraw, false)
    }
  }

  render() {
    return (
      <div>
        <WithdrawCurrency parentFunc={this._handleCurrency.bind(this)} placeHolder={AdminWithdrawStrings.currencyPlaceHolder} label={AdminWithdrawStrings.currencyLabel} selections={this.state.currencies} />
        <Amount label={AdminWithdrawStrings.amountLabel} result={this.state.amount}/>
        <WithdrawAmount parentFunc={this._handleWithdrawAmount.bind(this)} placeHolder={AdminWithdrawStrings.withdrawAmountPlaceholder} label={AdminWithdrawStrings.withdrawAmountLabel} />
        <WithdrawSubmit parentFunc={this._handleWithdraw.bind(this)} label={AdminWithdrawStrings.withdrawSubmitLabel} buttonLabel={AdminWithdrawStrings.buttonLabel} />
        <WithdrawSubmitted label={AdminWithdrawStrings.submittedResultLabel} result={this.state.result}/>
      </div>
    )
  }
}

Withdraw.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Withdraw
