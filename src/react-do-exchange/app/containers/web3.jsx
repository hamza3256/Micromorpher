import Web3 from 'web3';
import React from 'react';     
import {LFCAccounts, LFCCurrency, LFCRate, LFCAmount, LFCEther, LFCSubmit} from '../components/lfc';

class Ethereum extends React.Component {

  constructor(props) {
    super(props)

    let web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
    web3.eth.defaultAccount = web3.eth.accounts[0]
    let defAccount = web3.eth.accounts[0]

    const exchangerAbi = [{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"code","type":"string"},{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"},{"name":"code","type":"string"}],"name":"getDepositedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_orderId","type":"int256"},{"name":"_offerCurrency","type":"string"},{"name":"_completor","type":"address"},{"name":"_wantCurrency","type":"string"},{"name":"_wantAmount","type":"uint256"}],"name":"completeOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"},{"name":"_amount","type":"uint256"}],"name":"getEtherAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_rate","type":"uint256"}],"name":"setRate","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_creator","type":"address"},{"name":"_offerCurrency","type":"string"},{"name":"_offerAmount","type":"uint256"},{"name":"_wantCurrency","type":"string"},{"name":"_wantValue","type":"uint256"}],"name":"placeOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"int256"}],"name":"deleteOrder","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_forexDB","type":"address"},{"name":"_orderDB","type":"address"},{"name":"_depositDB","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"code","type":"string"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"RateSet","type":"event"}]
    const exchangerContract = web3.eth.contract(exchangerAbi)
    const exchanger = exchangerContract.at('0x90084fd6d6885930a9ecdde852a1cd193d87fb06')

    const exchangeAcc = this.props.account
    const currs = this.props.currencies
    const curr = this.props.currency    
    const rt = this.props.rate
    const amnt = this.props.amount
    const eth = this.props.ether
    
    this.state = {
        web3: web3,
        exchanger: exchanger,
        defAccount: defAccount,
        exchangeAccount: exchangeAcc,
        currencies: currs,
        currency: curr,
        rate: rt,
        amount: amnt,
        ether: eth
    }  
  }

  _getAccounts() {
    const accs = this.state.web3.eth.accounts;

    if (accs.length === 0) {
      console.error("Couldn't get any Ethereum accounts!")        
      return
    }
    return accs  
  }

  _handleAccount(value) {
    this.setState({exchangeAccount: value})    
    //console.log("Account is " + value)
  }

  _handleCurrency(value) {
    this.setState({currency: value})
    //console.log("Currency is " + value)
    //now use web3 to get the exchange rate from ethereum:
    const exchanger = this.state.exchanger    
    console.log("Getting exchange rate for " + value)
    const rate = exchanger.getRate(value)
    const theRate = rate.toNumber()
    console.log("Got Rate " + theRate)
    this.setState({rate: theRate})
  }

  _handleAmount(value) {
    this.setState({amount: value})
    console.log("Amount is " + value)
    //Display the amount of ether you'd get
    const exchanger = this.state.exchanger
    const currency = this.state.currency
    const eth = exchanger.getEtherAmount(currency,value)
    const theEth = eth.toNumber()
    this.setState({ether: theEth})
  }

  _handleExchange() {
    console.log("Exchanged!")
  }

  render() {
    let accs = this._getAccounts()
    return (
        <div>
            <LFCAccounts accounts={accs} account={this.state.exchangeAccount} parentFunc={this._handleAccount.bind(this)}/>
            <LFCCurrency currencies={this.state.currencies} currency={this.state.currency} parentFunc={this._handleCurrency.bind(this)}/>
            <LFCRate rate={this.state.rate}/>
            <LFCAmount amount={this.state.amount} parentFunc={this._handleAmount.bind(this)}/>
            <LFCEther ether={this.state.ether}/>
            <LFCSubmit parentFunc={this._handleExchange.bind(this)}/>
        </div>
    )
  }
}

Ethereum.propTypes = {
  account: React.PropTypes.string,
  currencies: React.PropTypes.array,
  currency: React.PropTypes.string,  
  rate: React.PropTypes.number,
  amount: React.PropTypes.number,
  ether: React.PropTypes.number
}

Ethereum.defaultProps = {
  account: "",
  currencies: ["GBP","USD","EUR","JPY","CHF","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SPL","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWD"],
  currency: "",
  rate: 0,
  amount: 0,
  ether: 0
}

export default Ethereum
