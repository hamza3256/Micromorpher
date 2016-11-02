import Web3 from 'web3'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './app' 
import AccountAdmin from './containers/account'
import Exchange from './containers/exchange'
import Home from './containers/home'

class Index extends React.Component {

	constructor(props) {
	    super(props)

	    let web3 = new Web3();
	    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"))

	    const exchangerAbi = [{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"},{"name":"_offerCurrency","type":"string"},{"name":"_offerAmount","type":"uint256"},{"name":"_etherValue","type":"uint256"}],"name":"completeOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"}],"name":"getOrderId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"code","type":"string"},{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"}],"name":"getRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"code","type":"string"}],"name":"getDepositedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"}],"name":"deleteOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"string"},{"name":"_amount","type":"uint256"}],"name":"getEtherAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"string"},{"name":"_rate","type":"uint256"}],"name":"setRate","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_epochTime","type":"uint256"},{"name":"_creator","type":"address"},{"name":"_offerCurrency","type":"string"},{"name":"_offerAmount","type":"uint256"},{"name":"_etherValue","type":"uint256"}],"name":"placeOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"Funded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_epochTime","type":"uint256"},{"indexed":false,"name":"_creator","type":"address"}],"name":"OrderDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_offerCurrency","type":"string"},{"indexed":false,"name":"_offerAmount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"string"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"string"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"RateSet","type":"event"}]
    	const exchangerContract = web3.eth.contract(exchangerAbi)
    	const contractAddress = '0xf348821c4ba241bc267ddbfd075d46ac46ebb171'
    	const exchanger = exchangerContract.at(contractAddress)	    
	    
	    this.state = {
	        web3: web3,
	        exchanger: exchanger
	    }
	}

	render () {	
		return (
		    <Router history={browserHistory}>
		    	<Route path="/" component={App}> 
		    		<IndexRoute component={Home}/>
		    		<Route path="/account" web3={this.state.web3} component={AccountAdmin}/>
				    <Route path="/exchange" web3={this.state.web3} exchanger={this.state.exchanger} component={Exchange}/>
				</Route>
		  	</Router>
			/*<div>	  	
			  	<AccountAdmin web3={this.state.web3}/>
			  	<Exchange web3={this.state.web3} exchanger={this.state.exchanger}/>
			</div>*/
		)  		
  	}
}

render(<Index/>, document.getElementById('app'));