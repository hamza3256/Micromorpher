import React from 'react'
import PropTypes from 'prop-types'

import {ExchangeCurrency, ExchangeRate, ExchangeSubmit, RateSubmitted} from '../components/exchange'
import ExchangeHandler from '../utils/exchangeHandler'
import {ExchangeStrings} from '../utils/outputStrings'

class Exchanger extends React.Component {

  constructor(props) {
    super(props)

    const web3Handler = this.props.web3
    const constractHander = this.props.contract
    const exchanger = constractHander.getExchanger()
    this.exchangeHandler = new ExchangeHandler()

    const numCountryCodes = ExchangeHandler.countryCodes.length
    let countryCodeSelections = []
    for (let i = 0; i < numCountryCodes; i++) {
      countryCodeSelections[i] = { value: i, label: ExchangeHandler.countryCodes[i] }
    }

    this.defaultTO = {gas: 300000}
    this.state = {
      currencies: countryCodeSelections,
      result: ""
    }

    //  this._setExchangeRatesEvent()

  }

  /* _setExchangeRatesEvent() {,
    searchable: true,
  }
    const exchanger = this.state.exchanger
    const thisJs = this
    const web3 = this.state.web3
    console.log("Rate set event!")
    var rateSet = exchanger.RateSet(function(error, result) {
      if (!error) {
        const code = result.args.code
        const rate = web3.fromWei(result.args.rate.toNumber())
        const thisResult = code + " Rate Set to " + rate
        thisJs.setState({result: thisResult})
        console.log(result)
      } else {
        console.error(result)
      }
    })
  } */

  setRate (_self, _result) {
    _self.setState({result: _result})
    _self.exchangeHandler.reset()
  }

  _handleCurrency (selection) {
    this.exchangeHandler.setCurrency(_selection.label)
  }

  _handleRate (value) {
    this.props.exchangeHandler.setRate(_selection.value)
  }

  _handleRateSet () {
    //console.log("In rate set")
    if (this.exchangeHandler.checkSet()) {
      const web3 = this.web3Handler.getWeb3()
      const currency = this.exchangeHandler.getCurrency()
      const rate = this.exchangeHandler.getRate()
      const thisRate = web3.toWei(rate,"ether")
      params = [currency, thisRate, this.defaultTO]
      this.web3Handler.callParamHandler(this, this.exchanger.setRate, params, this.setRate, false)
      console.log("Set Wei exchange rate for " + currency + " at rate " + thisRate)
    }
  }

  render() {
    return (
      <div>
        <ExchangeCurrency parentFunc={this._handleCurrency.bind(this)} placeHolder={ExchangeStrings.exchangePlaceHolder} label={ExchangeStrings.exchangeLabel} selections={this.state.currencies} />
        <ExchangeRate parentFunc={this._handleRate.bind(this)} placeHolder={ExchangeStrings.ratePlaceHolder} label={ExchangeStrings.rateLabel} />
        <ExchangeSubmit parentFunc={this._handleRateSet.bind(this)} label={ExchangeStrings.rateSubmitLabel} buttonLabel={ExchangeStrings.buttonLabel} />
        <RateSubmitted label={ExchangeStrings.submittedResultLabel} result={this.state.result}/>
      </div>
    )
  }
}

Exchanger.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Exchanger
