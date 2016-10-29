import Web3 from 'web3';
import React from 'react';     
import Admin from './admin';    
import Exchanger from './exchange';

class Ethereum extends React.Component {

  constructor(props) {
    super(props)

    let web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));    
    web3.eth.defaultAccount = web3.eth.accounts[0]
    const contractAddress = '0x59361387eab7c6a3d5375bd7fd04a66d0d071e5a'
    
    this.state = {
        web3: web3,
        contractAddress: contractAddress
    }

  }  

  render() {
    return (
        <div>
            <Admin web3={this.state.web3} contractAddress={this.state.contractAddress}/>
            <Exchanger web3={this.state.web3} contractAddress={this.state.contractAddress}/>
        </div>
    )
  }
}

export default Ethereum