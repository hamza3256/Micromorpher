import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './app'     
import Admin from './containers/admin'  
import Exchanger from './containers/exchange'

class Index extends React.Component {

	constructor(props) {
	    super(props)

	    let web3 = new Web3();
	    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"))    
	    web3.eth.defaultAccount = web3.eth.accounts[0]
	    const contractAddress = '0x59361387eab7c6a3d5375bd7fd04a66d0d071e5a'
	    
	    this.state = {
	        web3: web3,
	        contractAddress: contractAddress
	    }
	}

	render () {	
		return (
		    <Router history={browserHistory}>
		    	<Route path="/" component={App}>   
				    <Route path="/admin" web3={this.state.web3} contractAddress={this.state.contractAddress} component={Admin}/>
				    <Route path="/rates" web3={this.state.web3} contractAddress={this.state.contractAddress} component={Exchanger}/>
				</Route>
		  	</Router>
		)  		
  	}
}

render(<Index/>, document.getElementById('app'));