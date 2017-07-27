import React from 'react'
import PropTypes from 'prop-types'

import {ExchangeCurrency, ExchangeRate, ExchangeSubmit, RateSubmitted} from '../components/exchange'
import AdminExchangeHandler from '../../utils/adminExchangeHandler'
import {AdminExchangeStrings, CountryCodes} from '../../utils/outputStrings'

class Exchanger extends React.Component {

  constructor(props) {
    super(props)

    this.web3Handler = this.props.web3
    const contractHander = this.props.contract
    this.exchanger = contractHander.getExchanger()
    this.exchangeHandler = new ExchangeHandler()

    const numCountryCodes = CountryCodes.codes.length
    let countryCodeSelections = []
    for (let i = 0; i < numCountryCodes; i++) {
      countryCodeSelections[i] = { value: i, label: CountryCodes.codes[i] }
    }

    this.defaultTO = {gas: 300000}
    this.state = {
      currencyId: undefined,
      currencies: countryCodeSelections,
      result: ""
    }
  }

  setRate (_self, _result) {
    _self.setState({result: _result})
    _self.exchangeHandler.reset()
  }

  _handleCurrency (_selection) {
    this.exchangeHandler.setCurrency(_selection.label)
    this.setState({currencyId: _selection.value})
  }

  _handleRate (_value) {
    this.exchangeHandler.setRate(_value)
  }

  _handleRateSet () {
    //console.log("In rate set")
    if (this.exchangeHandler.checkSet()) {
      const web3 = this.web3Handler.getWeb3()
      const currency = this.exchangeHandler.getCurrency()
      const rate = this.exchangeHandler.getRate()
      const thisRate = web3.toWei(rate,"ether")
      //console.log('Currency: ' + currency + ' Rate: ' + thisRate)
      const params = [currency, thisRate, this.defaultTO]
      this.web3Handler.callParamHandler(this, this.exchanger.setRate, params, this.setRate, false)
      //console.log("Set Wei exchange rate for " + currency + " at rate " + thisRate)
    }
  }

  render() {
    return (
      <div>
        <ExchangeCurrency parentFunc={this._handleCurrency.bind(this)} placeHolder={AdminExchangeStrings.exchangePlaceHolder} label={AdminExchangeStrings.exchangeLabel} selections={this.state.currencies} selection={this.state.currencyId}  />
        <ExchangeRate parentFunc={this._handleRate.bind(this)} placeHolder={AdminExchangeStrings.ratePlaceHolder} label={AdminExchangeStrings.rateLabel} />
        <ExchangeSubmit parentFunc={this._handleRateSet.bind(this)} label={AdminExchangeStrings.rateSubmitLabel} buttonLabel={AdminExchangeStrings.buttonLabel} />
        <RateSubmitted label={AdminExchangeStrings.submittedResultLabel} result={this.state.result}/>
      </div>
    )
  }
}

Exchanger.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Exchanger
