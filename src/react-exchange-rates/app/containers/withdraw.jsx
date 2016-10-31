import React from 'react';     
import {Currency, Amount, WithdrawAmount, Withdraw} from '../components/withdraw';

class WithdrawCurrency extends React.Component {

  constructor(props) {
    super(props)

    //const web3 = this.props.route.web3       
    //const exchanger = this.props.route.exchanger
    const web3 = this.props.web3       
    const exchanger = this.props.exchanger   
    const currs = this.props.currencies  

    const withdrawn = exchanger.Withdrawn()
    
    this.state = {
        web3: web3,
        exchanger: exchanger,
        currencies: currs,
        withdrawn: withdrawn,
        currency: "",
        amount: 0,
        withdrawAmount: 0
    } 

    this._withdrawnEvent()
  }

  _withdrawnEvent() {

    //event Withdrawn(string code, uint256 value);

    const web3 = this.state.web3  
    const exchanger = this.state.exchanger
    const thisJs = this
    const withdrawn = this.state.withdrawn

    withdrawn.watch(function(error, result) {
      if (!error) {        
        const currency = result.args.code         
        const amount = web3.fromWei(result.args.value.toNumber())       
        console.log("New amount for currency " + currency + " is " + amount)
        thisJs.setState({amount: amount})
      } else {
        console.error(result)
      }
    })
  }

  _handleCurrency(value) {   
    const web3 = this.state.web3
    const exchanger = this.state.exchanger    
    console.log("Getting deposited amount for currency " + value)
    const amount = exchanger.getDepositedAmount(value).toNumber()   
    console.log("Got amount: " + amount)
    const theAmount = web3.fromWei(amount,"ether")    
    console.log("Got amount: " + theAmount)    
    this.setState({currency: value})
    this.setState({amount: theAmount})
  }

  _handleWithdrawAmount(value) {    
    const web3 = this.state.web3
    console.log("Withdraw amount is " + value)
    this.setState({withdrawAmount: value})
  }

  _handleWithdraw() {    
    const web3 = this.state.web3
    const exchanger = this.state.exchanger 
    const currency = this.state.currency
    const withdrawAmount = this.state.withdrawAmount
    const thisAmount = web3.toWei(withdrawAmount,"ether")    
    exchanger.withdraw(currency,thisAmount)
    this.setState({withdrawAmount: 0})
  }

  render() {
    return (
      <div>
          <Currency currencies={this.state.currencies} currency={this.state.currency} parentFunc={this._handleCurrency.bind(this)}/>
          <Amount amount={this.state.amount}/>
          <WithdrawAmount withdrawAmount={this.state.withdrawAmount} parentFunc={this._handleWithdrawAmount.bind(this)}/>
          <Withdraw parentFunc={this._handleWithdraw.bind(this)}/>
      </div>
    )
  }

  componentWillUnmount() {
    const withdrawn = this.state.withdrawn
    withdrawn.stopWatching()
  }
}

WithdrawCurrency.propTypes = {  
  web3: React.PropTypes.object,
  exchanger: React.PropTypes.object,
  currencies: React.PropTypes.array
}

WithdrawCurrency.defaultProps = {
  currencies: ["GBP","USD","EUR","JPY","CHF","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SPL","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWD"]
}

export default WithdrawCurrency
