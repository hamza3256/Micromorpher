import Web3 from 'web3';
import React from 'react';
import {LFCCurrency, LFCRate, LFCAmount, LFCEther, LFCPlaceOrder, LFCSubmit, LFCOrderState} from '../components/exchange';

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

    this.defaultTO = {gas: 300000}
    this.state = {
      currencyId: undefined,
      currencies: countryCodeSelections,
      result: ""
    }

    /* this.state = {
        web3: web3,
        exchanger: exchanger,
        latest: latestFilter,
        currencies: currs,
        txHash: "",
        currency: "",
        rate: 0,
        amount: 0,
        ether: 0,
        orderTime: 0,
        orderPlaced: false,
        confirmPlaced: false,
        orderState: " "
    }  */
  }

  /* _latestBlock() {
    const thisJs = this
    const filter = this.state.latest
    const web3 = this.state.web3
    const exchanger = this.state.exchanger

    //Display the amount of ether you'll get

    filter.watch(function (error, result) {
      if (error) {
        console.error(error)
      } else {
        let thisTx = thisJs.state.txHash
        console.log("State transaction " + thisTx)
        const block = web3.eth.getBlock(result, true)
        let transactions = block.transactions
        for(let i = 0; i < transactions.length; i++)
        {
          console.log("block transaction " + transactions[i].hash)
          if( thisTx == transactions[i].hash ){
            console.log("Got match!")
            if (thisJs.state.orderPlaced) {
              const currency = thisJs.state.currency
              const amount = thisJs.state.amount
              console.log("Amount is " + amount)
              const amountToWei = web3.toWei(amount,"ether")
              console.log("Amount in Wei is " + amountToWei)
              const eth = exchanger.getEtherAmount(currency,amountToWei)
              console.log("Got Amount in Eth: " + eth)
              const thisEth = eth.toNumber()
              thisJs.setState({ether: thisEth})
              thisJs.setState({orderState: "Order Placed! (OrderId: " + thisTx + ")"})
              thisJs.setState({orderPlaced: false})
            } else if (thisJs.state.confirmPlaced) {
              thisJs.setState({orderState: "Order Confirmed! (OrderId: " + thisTx + ")"})
              thisJs.setState({confirmPlaced: false})
            }
            break
          }
        }
      }
    })
  } */

  _handleCurrency(value) {
    this.setState({currency: value})
    const web3 = this.state.web3
    const exchanger = this.state.exchanger
    console.log("Getting exchange rate for " + value)
    const rate = exchanger.getRate(value).toNumber()
    console.log("Got Rate in Wei: " + rate)
    const theRate = web3.fromWei(rate,"ether")
    console.log("Got Rate in Eth: " + theRate)
    this.setState({rate: theRate})
  }

  _handleAmount(value) {
    const web3 = this.state.web3
    this.setState({amount: value})
    console.log("Amount is " + value)
  }

  _handlePlaceOrder() {
    const web3 = this.state.web3
    const exchanger = this.state.exchanger
    const epochTime = (new Date).getTime()
    const account = web3.eth.defaultAccount
    const currency = this.state.currency
    const amount = this.state.amount
    const thisAmount = web3.toWei(amount,"ether")
    const ether = this.state.ether
    const wei = web3.toWei(ether,"ether")
    const tx = exchanger.placeOrder(epochTime, account, currency, thisAmount, wei)
    console.log("Placed order: Time: " + epochTime + " Account: " + account + " Currency: " + currency + " Amount: " + thisAmount + " Wei: " + wei)
    console.log("Place Transaction is " + tx)
    this.setState({txHash: tx})
    this.setState({orderTime: epochTime})
    this.setState({orderPlaced: true})
  }

  _handleExchange() {
    const web3 = this.state.web3
    const exchanger = this.state.exchanger
    const epochTime = this.state.orderTime
    const account = web3.eth.defaultAccount
    const currency = this.state.currency
    const amount = this.state.amount
    const thisAmount = web3.toWei(amount,"ether")
    const ether = this.state.ether
    const wei = web3.toWei(ether,"ether")
    const tx = exchanger.completeOrder(epochTime, account, currency, thisAmount, wei)
    console.log("Placed order: Time: " + epochTime + " Account: " + account + " Currency: " + currency + " Amount: " + thisAmount + " Wei: " + wei)
    console.log("Complete Transaction is " + tx + "for account " + account)
    this.setState({txHash: tx})
    this.setState({confirmPlaced: true})
  }

  render() {
    return (
        <div>
            <LFCCurrency currencies={this.state.currencies} currency={this.state.currency} parentFunc={this._handleCurrency.bind(this)}/>
            <LFCRate rate={this.state.rate}/>
            <LFCAmount amount={this.state.amount} parentFunc={this._handleAmount.bind(this)}/>
            <LFCPlaceOrder parentFunc={this._handlePlaceOrder.bind(this)}/>
            <LFCEther ether={this.state.ether}/>
            <LFCSubmit parentFunc={this._handleExchange.bind(this)}/>
            <LFCOrderState orderState={this.state.orderState}/>
        </div>
    )
  }
}

Exchange.propTypes = {
  web3: React.PropTypes.object,
  exchanger: React.PropTypes.object,
  account: React.PropTypes.string,
  currencies: React.PropTypes.array
}

export default Exchange
