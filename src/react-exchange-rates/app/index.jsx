import Web3 from 'web3'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './app'     
import Admin from './containers/admin'  
import Exchanger from './containers/exchange'
import Home from './containers/home'
import WithdrawCurrency from './containers/withdraw'
import EventViewer from './containers/events'

class Index extends React.Component {

	constructor(props) {
	    super(props)

	    let web3 = new Web3();
	    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"))    
	    web3.eth.defaultAccount = web3.eth.accounts[0]

	    const exchangerAbi = [{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"},{"name":"_offerCurrency","type":"string"},{"name":"_offerAmount","type":"uint256"},{"name":"_etherValue","type":"uint256"}],"name":"completeOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"}],"name":"getOrderId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"code","type":"string"},{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"code","type":"string"},{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"},{"name":"code","type":"string"}],"name":"getDepositedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"code","type":"string"}],"name":"getDepositedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"}],"name":"deleteOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"},{"name":"_amount","type":"uint256"}],"name":"getEtherAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_rate","type":"uint256"}],"name":"setRate","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"},{"name":"_offerCurrency","type":"string"},{"name":"_offerAmount","type":"uint256"},{"name":"_etherValue","type":"uint256"}],"name":"placeOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_forexDB","type":"address"},{"name":"_orderDB","type":"address"},{"name":"_depositDB","type":"address"}],"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"Funded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_offerCurrency","type":"string"},{"indexed":false,"name":"_offerAmount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"string"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"string"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"RateSet","type":"event"}]
    	const exchangerContract = web3.eth.contract(exchangerAbi)
    	const contractAddress = '0x39c08fbdc5ef024f878dc5d5c33e6f4d22f247e3'
    	const exchanger = exchangerContract.at(contractAddress)	
	    
	    this.state = {
	        web3: web3,
	        exchanger: exchanger,
	        contractAddress: contractAddress
	    }
	}

	render () {	
		return (
		    /*<Router history={browserHistory}>
		    	<Route path="/" component={App}> 
		    		<IndexRoute component={Home}/>  
				    <Route path="/admin" web3={this.state.web3} contractAddress={this.state.contractAddress} component={Admin}/>
				    <Route path="/rates" web3={this.state.web3} exchanger={this.state.exchanger} component={Exchanger}/>
				    <Route path="/events" web3={this.state.web3} exchanger={this.state.exchanger} component={EventViewer}/>
				</Route>
		  	</Router>*/
        	<div>
			  	<Admin web3={this.state.web3} contractAddress={this.state.contractAddress}/>
			  	<Exchanger web3={this.state.web3} exchanger={this.state.exchanger}/>
			  	<WithdrawCurrency web3={this.state.web3} exchanger={this.state.exchanger}/>
			  	<EventViewer web3={this.state.web3} exchanger={this.state.exchanger}/>
			</div>
		)  		
  	}
}

render(<Index/>, document.getElementById('app'));