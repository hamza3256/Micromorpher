import Web3 from 'web3';
import React from 'react';     
import {LFCCurrency, AccountFunds, LFCAccounts, LFCRate, LFCAmount, LFCEther, LFCPlaceOrder, LFCSubmit, LFCOrderState} from '../components/lfc';

class Ethereum extends React.Component {

  constructor(props) {
    super(props)

    let web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
    web3.eth.defaultAccount = web3.eth.accounts[0]

    const exchangerAbi = [{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"},{"name":"_offerCurrency","type":"string"},{"name":"_offerAmount","type":"uint256"},{"name":"_etherValue","type":"uint256"}],"name":"completeOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"}],"name":"getOrderId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"code","type":"string"},{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"code","type":"string"},{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"},{"name":"code","type":"string"}],"name":"getDepositedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"code","type":"string"}],"name":"getDepositedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"}],"name":"deleteOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"},{"name":"_amount","type":"uint256"}],"name":"getEtherAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_rate","type":"uint256"}],"name":"setRate","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"},{"name":"_offerCurrency","type":"string"},{"name":"_offerAmount","type":"uint256"},{"name":"_etherValue","type":"uint256"}],"name":"placeOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_forexDB","type":"address"},{"name":"_orderDB","type":"address"},{"name":"_depositDB","type":"address"}],"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"Funded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"string"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"RateSet","type":"event"}]
    const exchangerContract = web3.eth.contract(exchangerAbi)
    const contractAddress = '0xb7c25d9f302ad2d00b5b7e082e0ff4df96e6fd85'
    const exchanger = exchangerContract.at(contractAddress)
    
    const exchangeAcc = this.props.account
    const accountFunds = this.props.funds   
    const currs = this.props.currencies
    const curr = this.props.currency    
    const rt = this.props.rate
    const amnt = this.props.amount
    const eth = this.props.ether
    const orderState = this.props.orderState    
    const latestFilter = web3.eth.filter('latest')
    const txHash = this.props.txHash
    const orderPlaced = this.props.orderPlaced
    const orderTime = this.props.orderTime
    
    this.state = {
        web3: web3,
        latest: latestFilter,
        txHash: txHash,
        exchanger: exchanger,
        exchangeAccount: exchangeAcc,
        funds: accountFunds,
        currencies: currs,
        currency: curr,
        rate: rt,
        amount: amnt,
        ether: eth,
        orderTime: orderTime,
        orderPlaced: orderPlaced,
        orderState: orderState
    }  

    this._latestBlock()
  }

  _latestBlock() {
    const thisJs = this
    const filter = this.state.latest
    const web3 = this.state.web3
    const exchanger = this.state.exchanger  
    const account = this.state.exchangeAccount 

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
              thisJs.setState({orderState: "Order Placed! (OrderId:" + thisTx + ")"})
              thisJs.setState({orderPlaced: false})
            } else {
              thisJs.setState({orderState: "Order Confirmed! (OrderId:" + thisTx + ")"})
              const funds = web3.fromWei(web3.eth.getBalance(account),"ether").toString() 
              thisJs.setState({funds: funds})
            }
            break
          }
        }
      }
    })
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
    const web3 = this.state.web3
    const funds = web3.fromWei(web3.eth.getBalance(value),"ether").toString() 
    this.setState({funds: funds})    
    this.setState({exchangeAccount: value})
    //console.log("Account is " + value)
  }

  _handleCurrency(value) {
    this.setState({currency: value})    
    const web3 = this.state.web3
    const exchanger = this.state.exchanger    
    console.log("Getting exchange rate for " + value)
    const rate = exchanger.getRate(value).toNumber()
    const theRate = web3.fromWei(rate,"ether")
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

  _handlePlaceOrder() {    
    const web3 = this.state.web3
    const exchanger = this.state.exchanger  
    const epochTime = (new Date).getTime()
    const account = this.state.exchangeAccount
    const currency = this.state.currency
    const amount = this.state.amount
    const thisAmount = web3.toWei(amount,"ether")
    const ether = this.state.ether    
    const tx = exchanger.placeOrder(epochTime, account, currency, thisAmount, ether)
    console.log("Transaction is " + tx)
    this.setState({txHash: tx})
    this.setState({orderTime: epochTime})
    this.setState({orderPlaced: true})
  }

  _handleExchange() {      
    const web3 = this.state.web3
    const exchanger = this.state.exchanger  
    const epochTime = this.state.orderTime
    const account = this.state.exchangeAccount
    const currency = this.state.currency
    const amount = this.state.amount
    const thisAmount = web3.toWei(amount,"ether")
    const ether = this.state.ether       
    const tx = exchanger.completeOrder(epochTime, account, currency, thisAmount, ether)
  }

  render() {
    let accs = this._getAccounts()
    return (
        <div>
            <LFCAccounts accounts={accs} account={this.state.exchangeAccount} parentFunc={this._handleAccount.bind(this)}/>
            <AccountFunds funds={this.state.funds}/>
            <LFCCurrency currencies={this.state.currencies} currency={this.state.currency} parentFunc={this._handleCurrency.bind(this)}/>
            <LFCRate rate={this.state.rate}/>
            <LFCAmount amount={this.state.amount} parentFunc={this._handleAmount.bind(this)}/>
            <LFCEther ether={this.state.ether}/>
            <LFCPlaceOrder parentFunc={this._handlePlaceOrder.bind(this)}/>
            <LFCSubmit parentFunc={this._handleExchange.bind(this)}/>
            <LFCOrderState orderState={this.state.orderState}/>
        </div>
    )
  }

  componentWillUnmount() {
    const filter = this.state.latest
    filter.stopWatching
  }
}

Ethereum.propTypes = {
  account: React.PropTypes.string,
  funds: React.PropTypes.string, 
  currencies: React.PropTypes.array,
  currency: React.PropTypes.string,  
  rate: React.PropTypes.number,
  amount: React.PropTypes.number,
  ether: React.PropTypes.number,
  orderTime: React.PropTypes.number,
  orderPlaced: React.PropTypes.bool,
  orderState: React.PropTypes.string
}

Ethereum.defaultProps = {
  account: "",
  funds: "0",
  currencies: ["GBP","USD","EUR","JPY","CHF","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SPL","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWD"],
  currency: "",
  rate: 0,
  amount: 0,
  ether: 0,
  orderTime: 0,
  orderPlace: false,
  orderState: " "
}

export default Ethereum
