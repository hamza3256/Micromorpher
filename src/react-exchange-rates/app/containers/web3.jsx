import Web3 from 'web3';
import React from 'react';     
import {AdminAccount, AdminFunds, ContractFunds, FundContract, FundSubmit, ExchangeCurrency, ExchangeRate, ExchangeSubmit} from '../components/exchange';

class Ethereum extends React.Component {

  constructor(props) {
    super(props)

    /*
    if(typeof web3 !== 'undefined' && typeof Web3 !== 'undefined') {
      // If there's a web3 library loaded, then make your own web3
      web3 = new Web3(web3.currentProvider);
    } else if (typeof Web3 !== 'undefined') {
      // If there isn't then set a provider
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    } else if(typeof web3 == 'undefined') {
      // Alert the user he is not in a web3 compatible browser
      console.error("No Web3!")
      return;  
    } */

    let web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
    web3.eth.defaultAccount = web3.eth.accounts[0]

    const exchangerAbi = [{"constant":true,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"}],"name":"getOrderId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"code","type":"string"},{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"}],"name":"completeOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"code","type":"string"},{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"},{"name":"code","type":"string"}],"name":"getDepositedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"code","type":"string"}],"name":"getDepositedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"}],"name":"deleteOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"},{"name":"_amount","type":"uint256"}],"name":"getEtherAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_rate","type":"uint256"}],"name":"setRate","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"},{"name":"_offerCurrency","type":"string"},{"name":"_offerAmount","type":"uint256"},{"name":"_etherValue","type":"uint256"}],"name":"placeOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_forexDB","type":"address"},{"name":"_orderDB","type":"address"},{"name":"_depositDB","type":"address"}],"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"Funded","type":"event"}]
    const exchangerContract = web3.eth.contract(exchangerAbi)
    const contractAddress = '0xdb79fb9db4cdfd14e9e760bee855cbe5764cd086'
    const exchanger = exchangerContract.at(contractAddress)

    const acc = web3.eth.accounts[0]  
    const adminFunds = web3.fromWei(web3.eth.getBalance(acc),"ether").toString()   
    const contractFunds = web3.fromWei(web3.eth.getBalance(contractAddress),"ether").toString() 
    const newFunds = this.props.contractNewFunds
    const currs = this.props.currencies
    const curr = this.props.currency
    const rt = this.props.rate
    
    this.state = {
        web3: web3,
        exchanger: exchanger,
        contractAddress: contractAddress,
        account: acc,
        adminFunds: adminFunds,
        contractFunds: contractFunds,
        contractNewFunds: newFunds,
        currencies: currs,
        currency: curr,
        rate: rt
    }  
  }

  _handleFundContract(value) {
    console.log("Funded contract with " + value)
    this.setState({contractNewFunds: value})
  }

  _handleFund() {
    const web3 = this.state.web3
    //const exchanger = this.state.exchanger
    const contractAddress = this.state.contractAddress
    const funds = this.state.contractNewFunds
    const newFunds = parseFloat(funds)
    const adminAccount = this.state.account
    web3.eth.sendTransaction({from: adminAccount, to: contractAddress, value: web3.toWei(funds,"ether")})
    console.log("Submit funds!" + funds)
    /*const adminFunds = web3.fromWei(web3.eth.getBalance(acc),"ether").toString()   
    const contractFunds = web3.fromWei(web3.eth.getBalance(contractAddress),"ether").toString() 
    this.setState({adminFunds: adminFunds})
    this.setState({contractFunds: adminFunds})*/
  }

  _handleCurrency(value) {
    this.setState({currency: value})
    console.log("Currency is " + value)
  }

  _handleRate(value) {
    this.setState({rate: value})
    console.log("Rate is " + value)
  }

  _handleSet() {    
    const exchanger = this.state.exchanger
    const currency = this.state.currency
    const rate = this.state.rate 
    console.log("Setting exchange rate for " + currency + " at rate " + rate)
    exchanger.setRate(currency, rate)
    console.log("Set exchange rate for " + currency + " at rate " + rate)
  }

  render() {
    return (
        <div>
            <AdminAccount address={this.state.account}/>
            <AdminFunds funds={this.state.adminFunds}/>
            <ContractFunds funds={this.state.contractFunds}/> 
            <FundContract ether={this.state.contractNewFunds} parentFunc={this._handleFundContract.bind(this)}/>
            <FundSubmit parentFunc={this._handleFund.bind(this)}/>
            <hr/>
            <ExchangeCurrency currencies={this.state.currencies} currency={this.state.currency} parentFunc={this._handleCurrency.bind(this)}/>
            <ExchangeRate parentFunc={this._handleRate.bind(this)}/>
            <ExchangeSubmit parentFunc={this._handleSet.bind(this)}/>
        </div>
    )
  }
}

Ethereum.propTypes = {
  contractNewFunds: React.PropTypes.string,
  currency: React.PropTypes.string,
  rate: React.PropTypes.number
}

Ethereum.defaultProps = {
  contractNewFunds: "0",
  currencies: ["GBP","USD","EUR","JPY","CHF","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SPL","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWD"],
  currency: "",
  rate: 0
}

export default Ethereum
