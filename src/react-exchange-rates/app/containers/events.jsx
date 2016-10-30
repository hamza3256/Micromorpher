import React from 'react'    
import {Events} from '../components/events'

class EventViewer extends React.Component {

  constructor(props) {
    super(props)

    //const web3 = this.props.route.web3    
    //const exchanger = this.props.route.exchanger 
    const web3 = this.props.web3    
    const exchanger = this.props.exchanger 

    const funded = exchanger.Funded()
    const orderPlaced = exchanger.OrderPlaced()
    const orderCompleted = exchanger.OrderCompleted()
    const orderDeleted = exchanger.OrderDeleted()
    const deposited = exchanger.Deposited()
    const withdrawn = exchanger.Withdrawn()
    const rateSet = exchanger.RateSet()
    
    this.state = {
        web3: web3,
        exchanger: exchanger,
        funded: funded,
        orderPlaced: orderPlaced,
        orderCompleted: orderCompleted,
        orderDeleted: orderDeleted,
        deposited: deposited,
        withdrawn: withdrawn,
        rateSet: rateSet,
        results: ""
    }

    this._fundedEvent()
    this._orderPlacedEvent()
    this._orderCompletedEvent()
    this._orderDeletedEvent()
    this._depositedEvent()
    this._withdrawnEvent()
    this._ratesEvent()

  }

  _fundedEvent() {

    //event Funded(address sender, uint rate);

    const web3 = this.state.web3  
    const exchanger = this.state.exchanger
    const thisJs = this
    const funded = this.state.funded

    funded.watch(function(error, result) {
      if (!error) {
        const time = Date.now().toString()
        const sender = result.args.sender
        const value = web3.fromWei(result.args.rate.toNumber())
        const thisResult = "Sender " + sender + " funded contract with " + value + " ether"
        const priorResults = thisJs.state.results
        let logResults = time + ": " + thisResult +  "\n" + priorResults 
        //console.log(logResults)
        thisJs.setState({results: logResults})
        //console.log(result)
      } else {
        console.error(result)
      }
    })

  }
   
  _orderPlacedEvent() {

    //event OrderPlaced(uint256 _epochTime, address _creator);

    const web3 = this.state.web3  
    const exchanger = this.state.exchanger
    const thisJs = this
    const orderPlaced = this.state.orderPlaced

    orderPlaced.watch(function(error, result) {
      if (!error) {
        const time = Date.now().toString()
        const creator = result.args._creator
        const thisResult = "Order placed by " + creator
        const priorResults = thisJs.state.results
        let logResults = time + ": " + thisResult +  "\n" + priorResults 
        //console.log(logResults)
        thisJs.setState({results: logResults})
        //console.log(result)
      } else {
        console.error(result)
      }
    })

  }
  
  _orderCompletedEvent() {

    //event OrderCompleted(uint256 _epochTime, address _creator);

    const web3 = this.state.web3  
    const exchanger = this.state.exchanger
    const thisJs = this
    const orderCompleted = this.state.orderCompleted

    orderCompleted.watch(function(error, result) {
      if (!error) {
        const time = Date.now().toString()
        const creator = result.args._creator
        const thisResult = "Order completed by " + creator
        const priorResults = thisJs.state.results
        let logResults = time + ": " + thisResult +  "\n" + priorResults 
        //console.log(logResults)
        thisJs.setState({results: logResults})
        //console.log(result)
      } else {
        console.error(result)
      }
    })

  }
  
  _orderDeletedEvent() {


    //event OrderDeleted(uint256 _epochTime, address _creator);  

    const web3 = this.state.web3  
    const exchanger = this.state.exchanger
    const thisJs = this
    const orderDeleted = this.state.orderDeleted

    orderDeleted.watch(function(error, result) {
      if (!error) {
        const time = Date.now().toString()
        const creator = result.args._creator
        const thisResult = "Order deleted by " + creator
        const priorResults = thisJs.state.results
        let logResults = time + ": " + thisResult +  "\n" + priorResults 
        //console.log(logResults)
        thisJs.setState({results: logResults})
        //console.log(result)
      } else {
        console.error(result)
      }
    })

  }
  
  _depositedEvent() {

    //event Deposited(string _offerCurrency, uint256 _offerAmount);

    const web3 = this.state.web3  
    const exchanger = this.state.exchanger
    const thisJs = this
    const deposited = this.state.deposited

    deposited.watch(function(error, result) {
      if (!error) {
        const time = Date.now().toString()
        const offerCurrency = result.args._offerCurrency        
        const offerAmount = web3.fromWei(result.args._offerAmount.toNumber())
        const thisResult = "Deposited " + offerCurrency + " at value " + offerAmount
        const priorResults = thisJs.state.results
        let logResults = time + ": " + thisResult +  "\n" + priorResults 
        //console.log(logResults)
        thisJs.setState({results: logResults})
        //console.log(result)
      } else {
        console.error(result)
      }
    })

  }
  
  _withdrawnEvent() {

    //event Withdrawn(string code, uint256 value);

    const web3 = this.state.web3  
    const exchanger = this.state.exchanger
    const thisJs = this
    const withdrawn = this.state.withdrawn

    withdrawn.watch(function(error, result) {
      if (!error) {
        const time = Date.now().toString()
        const offerCurrency = result.args.code        
        const offerAmount = web3.fromWei(result.args.value.toNumber())
        const thisResult = "Withdrawn " + offerCurrency + " at value " + offerAmount
        const priorResults = thisJs.state.results
        let logResults = time + ": " + thisResult +  "\n" + priorResults 
        //console.log(logResults)
        thisJs.setState({results: logResults})
        //console.log(result)
      } else {
        console.error(result)
      }
    })

  }

  _ratesEvent() {

    //event RateSet(string code, uint256 rate);

    const web3 = this.state.web3  
    const exchanger = this.state.exchanger
    const thisJs = this
    const rateSet = this.state.rateSet

    rateSet.watch(function(error, result) {
      if (!error) {
        const time = Date.now().toString()
        const code = result.args.code
        const rate = web3.fromWei(result.args.rate.toNumber())
        const thisResult = code + " rate set to " + rate
        const priorResults = thisJs.state.results
        let logResults = time + ": " + thisResult +  "\n" + priorResults 
        console.log(logResults)
        thisJs.setState({results: logResults})
        //console.log(result)
      } else {
        console.error(result)
      }
    })

  }
  render() {
    return (
        <div>
            <Events results={this.state.results}/>
        </div>
    )
  }

  componentWillUnmount() {
    const funded = this.state.funded
    const orderPlaced = this.state.orderPlaced
    const orderCompleted = this.state.orderCompleted
    const orderDeleted = this.state.orderDeleted
    const deposited = this.state.deposited
    const withdrawn = this.state.withdrawn
    const rateSet = this.state.rateSet

    funded.stopWatching()
    orderPlaced.stopWatching()
    orderCompleted.stopWatching()
    orderDeleted.stopWatching()
    deposited.stopWatching()
    withdrawn.stopWatching()
    rateSet.stopWatching()
  }
}

export default EventViewer