import React from 'react'    
import {ExchangeCurrency, ExchangeRate, ExchangeSubmit, RateSubmitted} from '../components/exchange'

class Exchanger extends React.Component {

  constructor(props) {
    super(props)

    //const web3 = this.props.route.web3    
    //const exchanger = this.props.route.exchanger  
    const web3 = this.props.web3    
    const exchanger = this.props.exchanger  
    const currs = this.props.currencies
    
    this.state = {
        web3: web3,
        exchanger: exchanger,
        currencies: currs,
        currency: "",
        rate: "",
        result: "" 
    }

    this._setExchangeRatesEvent()

  }

  _setExchangeRatesEvent() {
    const exchanger = this.state.exchanger
    const thisJs = this
    const web3 = this.state.web3
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
            <RateSubmitted result={this.state.result}/>
        </div>
    )
  }

}

Exchanger.propTypes = {
  web3: React.PropTypes.object,
  exchanger: React.PropTypes.object,
  currencies: React.PropTypes.array
}

Exchanger.defaultProps = {
  currencies: ["GBP","USD","EUR","JPY","CHF","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SPL","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWD"]
}

export default Exchanger