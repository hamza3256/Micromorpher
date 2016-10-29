import React from 'react';     
import {ExchangeCurrency, ExchangeRate, ExchangeSubmit} from '../components/exchange';

class Exchanger extends React.Component {

  constructor(props) {
    super(props)

    const web3 = this.props.web3 
    const contractAddress = this.props.contractAddress 

    //console.log("Address " + contractAddress)

    const exchangerAbi = [{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"},{"name":"_offerCurrency","type":"string"},{"name":"_offerAmount","type":"uint256"},{"name":"_etherValue","type":"uint256"}],"name":"completeOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"}],"name":"getOrderId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"code","type":"string"},{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"code","type":"string"},{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"},{"name":"code","type":"string"}],"name":"getDepositedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"code","type":"string"}],"name":"getDepositedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"}],"name":"deleteOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"},{"name":"_amount","type":"uint256"}],"name":"getEtherAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_rate","type":"uint256"}],"name":"setRate","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"},{"name":"_offerCurrency","type":"string"},{"name":"_offerAmount","type":"uint256"},{"name":"_etherValue","type":"uint256"}],"name":"placeOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_forexDB","type":"address"},{"name":"_orderDB","type":"address"},{"name":"_depositDB","type":"address"}],"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"Funded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_offerCurrency","type":"string"},{"indexed":false,"name":"_offerAmount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"string"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"string"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"RateSet","type":"event"}]
    const exchangerContract = web3.eth.contract(exchangerAbi)
    const exchanger = exchangerContract.at(contractAddress)
    const currs = this.props.currencies
    const curr = ""
    const rt = ""
    
    this.state = {
        web3: web3,
        exchanger: exchanger,
        currencies: currs,
        currency: curr,
        rate: rt
    }

  }

  _handleCurrency(value) {
    this.setState({currency: value})
    console.log("Currency is " + value)
  }

  _handleRate(value) {
    this.setState({rate: value})
    console.log("Rate is " + value)
  }

  _handleRateSet() {  
    console.log("In rate set")  
    const web3 = this.state.web3
    const exchanger = this.state.exchanger
    const currency = this.state.currency
    const rate = this.state.rate
    const thisRate = web3.toWei(rate,"ether")
    //console.log("Rate Set Rate is " + thisRate + " Currency is " + currency)
    //console.log("Exchanger is " + exchanger)
    exchanger.setRate(currency, thisRate)    
    console.log("Set Wei exchange rate for " + currency + " at rate " + thisRate)
  }

  render() {
    return (
        <div>
            <ExchangeCurrency currencies={this.state.currencies} currency={this.state.currency} parentFunc={this._handleCurrency.bind(this)}/>
            <ExchangeRate parentFunc={this._handleRate.bind(this)}/>
            <ExchangeSubmit parentFunc={this._handleRateSet.bind(this)}/>
        </div>
    )
  }

}

Exchanger.propTypes = {
  web3: React.PropTypes.object,
  contractAddress: React.PropTypes.string,
  currencies: React.PropTypes.array
}

Exchanger.defaultProps = {
  currencies: ["GBP","USD","EUR","JPY","CHF","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SPL","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWD"]
}

export default Exchanger