import React from 'react'
import PropTypes from 'prop-types'

// import {ExchangeCurrency, ExchangeRate, ExchangeSubmit} from '../components/exchange'

import {Heading, TextOutput, TextInput, TextAreaInput, TextSelect, TextSelectPlus, FormSubmit} from '../../components/form'
import AdminExchangeHandler from '../../utils/adminExchangeHandler'
import {AdminExchangeStrings, CountryCodes} from '../../utils/outputStrings'

class Exchanger extends React.Component {

  constructor(props) {
    super(props)

    this.web3Handler = this.props.web3
    const contractHander = this.props.contract
    this.exchanger = contractHander.getExchanger()
    //console.log("this exchanger: ", this.exchanger)
    this.exchangeHandler = new AdminExchangeHandler()

    const info = AdminExchangeStrings.info

    const numCountryCodes = CountryCodes.codes.length
    let countryCodeSelections = []
    for (let i = 0; i < numCountryCodes; i++) {
      countryCodeSelections[i] = { value: i, label: CountryCodes.codes[i] }
    }

    this.state = {
      currencyId: undefined,
      currencies: countryCodeSelections,
      info: info
    }
  }

  setRate (_self, _result) {
    const currency = _self.exchangeHandler.getCurrency()
    const rate = _self.exchangeHandler.getRate()
    const info = 'Exchange rate ' + rate + ' for Currency ' + currency + ' set. Transaction ID: ' + _result
    //console.log(info)
    _self.setState({info: info})
    _self.exchangeHandler.reset()
  }

  _handleCurrency (_selection) {
    //console.log("here? ", _selection)
    this.exchangeHandler.setCurrency(_selection.label)
    this.setState({currencyId: _selection.value})
  }

  _handleRate (_value) {
    //console.log("what about here? ", _value)
    this.exchangeHandler.setRate(_value)
  }

  _handleRateSet () {
    //console.log('checking setting rate')
    if (this.exchangeHandler.checkSet()) {
      //console.log('setting rate')
      const web3 = this.web3Handler.getWeb3()
      const currency = this.exchangeHandler.getCurrency()
      const rate = this.exchangeHandler.getRate()
      const thisRate = web3.utils.toWei(rate,"ether")
      //console.log('Currency: ' + currency + ' Rate: ' + thisRate)
      const account = this.web3Handler.getAccount()
      const params = [currency, thisRate, {from: account, gas: 300000}]
      this.web3Handler.callParamHandler(this, this.exchanger.methods.setRate, params, this.setRate, false)
      //console.log("Set Wei exchange rate for " + currency + " at rate " + thisRate)
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
          <TextSelect parentFunc={this._handleCurrency.bind(this)} placeHolder={AdminExchangeStrings.exchangePlaceHolder} label={AdminExchangeStrings.exchangeLabel} selections={this.state.currencies} />
          <TextInput parentFunc={this._handleRate.bind(this)} placeHolder={AdminExchangeStrings.ratePlaceHolder} label={AdminExchangeStrings.rateLabel} />
          <FormSubmit parentFunc={this._handleRateSet.bind(this)} label={AdminExchangeStrings.rateSubmitLabel} buttonLabel={AdminExchangeStrings.buttonLabel} />
        </div>
      </div>
    )
  }
}

Exchanger.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Exchanger
