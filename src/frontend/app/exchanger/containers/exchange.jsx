import React from 'react';
import PropTypes from 'prop-types'

import {LFCCurrency, LFCRate, LFCAmount, LFCEther, LFCPlaceOrder, LFCSubmit} from '../components/exchange';
import ExchangeHandler from '../../utils/exchangeHandler'
import {ExchangerStrings, CountryCodes} from '../../utils/outputStrings'

class Exchange extends React.Component {

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

    const info = ExchangerStrings.info

    this.defaultTO = {gas: 300000}
    this.state = {
      currencyId: undefined,
      currencies: countryCodeSelections,
      rate: '0',
      etherAmount: '0',
      info: info
    }
  }

  setRate (_self, _result) {
    //console.log("Got Rate in Wei: " + _result)
    const theRate = web3.fromWei(_result,"ether").toString()
    _self.exchangeHandler.setRate(theRate)
    _self.setState({rate: theRate})
  }

  setOrderPlaced (_self, _result) {
    const info = 'Order placed! Transaction ID: ' + _result
    _self.setState({info: info})
  }

  setCompleteOrder (_self, _result) {
    const info = 'Order confirmed! Transaction ID: ' + _result
    _self.setState({info: info})
    _self.exchangeHandler.reset()
  }

  setEtherAmount (_self, _result) {
    console.log('Ether amount' + _result)
    const amount = _result.toString()
    _self.exchangeHandler.setEtherAmount(amount)
    _self.setState({etherAmount: amount})
  }

  _handleCurrency (_selection) {
    this.exchangeHandler.setCurrency(_selection.label)
    this.setState({currencyId: _selection.value})
    const params = [_selection.label, this.defaultTO]
    this.web3Handler.callParamHandler(this, this.exchanger.getRate, params, this.setRate, false)
  }

  _handleAmount(_value) {
    this.exchangeHandler.setAmount(_value)
    const currency = this.exchangeHandler.getCurrency()
    const amount = this.exchangeHandler.getAmount()
    const thisAmount = web3.toWei(amount,"ether")
    const params = [currency, thisAmount, this.defaultTO]
    this.web3Handler.callParamHandler(this, this.exchanger.getEtherAmount, params, this.setEtherAmount, false)
  }

  _handlePlaceOrder() {
    const epochTime = (new Date).getTime()
    this.exchangeHandler.setOrderTime(epochTime)
    const account = this.web3Handler.getAccount()
    this.exchangeHandler.setAccount(account)
    if (this.exchangeHandler.checkSet()) {
      const currency = this.exchangeHandler.getCurrency()
      const amount = this.exchangeHandler.getAmount()
      const thisAmount = web3.toWei(amount,"ether")
      const ether = this.exchangeHandler.getEtherAmount()
      const wei = web3.toWei(ether,"ether")
      const params = [epochTime, account, currency, thisAmount, wei, this.defaultTO]
      this.web3Handler.callParamHandler(this, this.exchanger.placeOrder, params, this.setOrderPlaced, false)
    }
  }

  _handleExchange() {
    if (this.exchangeHandler.checkSet()) {
      const orderTime = this.exchangeHandler.getOrderTime()
      const account = this.exchangeHandler.getAccount()
      const currency = this.exchangeHandler.getCurrency()
      const amount = this.exchangeHandler.getAmount()
      const thisAmount = web3.toWei(amount,"ether")
      const ether = this.exchangeHandler.getEtherAmount()
      const wei = web3.toWei(ether,"ether")
      const params = [orderTime, account, currency, thisAmount, wei, this.defaultTO]
      this.web3Handler.callParamHandler(this, this.exchanger.completeOrder, params, this.setCompleteOrder, false)
    }
  }

  render() {
    return (
      <div>
        <div>
          <p>{this.state.info}</p>
          <hr />
        </div>
        <div>
          <LFCCurrency parentFunc={this._handleCurrency.bind(this)} placeHolder={ExchangerStrings.exchangeCurrencyPlaceholder} label={ExchangerStrings.exchangeCurrencyLabel} selections={this.state.currencies} selection={this.state.currencyId} />
          <LFCRate label={ExchangerStrings.rateLabel} result={this.state.rate}/>
          <LFCAmount parentFunc={this._handleAmount.bind(this)} placeHolder={ExchangerStrings.amountPlaceHolder} label={ExchangerStrings.amountLabel} />
          <LFCEther label={ExchangerStrings.etherLabel} result={this.state.etherAmount}/>
          <LFCPlaceOrder parentFunc={this._handlePlaceOrder.bind(this)} label={ExchangerStrings.placeOrderLabel} buttonLabel={ExchangerStrings.orderButtonLabel} />
          <LFCSubmit parentFunc={this._handleExchange.bind(this)} label={ExchangerStrings.confirmPlaceOrderLabel} buttonLabel={ExchangerStrings.confirmOrderButtonLabel} />
        </div>
      </div>
    )
  }
}

Exchange.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Exchange
