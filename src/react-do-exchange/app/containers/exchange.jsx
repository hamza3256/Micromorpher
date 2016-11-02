import Web3 from 'web3';
import React from 'react';     
import {LFCCurrency, LFCRate, LFCAmount, LFCEther, LFCPlaceOrder, LFCSubmit, LFCOrderState} from '../components/exchange';

class Exchange extends React.Component {

  constructor(props) {
    super(props)

    const web3 = this.props.route.web3       
    const exchanger = this.props.route.exchanger 
    //const web3 = this.props.web3       
    //const exchanger = this.props.exchanger  

    const latestFilter = web3.eth.filter('latest')    
    const currs = this.props.currencies    
    
    this.state = {
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
    }  

    this._latestBlock()
  }

  _latestBlock() {
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
  }

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

  componentWillUnmount() {
    const filter = this.state.latest
    filter.stopWatching()
  }
}

Exchange.propTypes = {  
  web3: React.PropTypes.object,
  exchanger: React.PropTypes.object,
  account: React.PropTypes.string,
  currencies: React.PropTypes.array
}

Exchange.defaultProps = {
  currencies: ["GBP","USD","EUR","JPY","CHF","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SPL","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWD"]
}

export default Exchange
