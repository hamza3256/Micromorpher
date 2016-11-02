import React from 'react'     
import {Account, AccountFunds} from '../components/account'

class AccountAdmin extends React.Component {

  constructor(props) {
    super(props)

    const web3 = this.props.route.web3  
    //const web3 = this.props.web3 
    web3.eth.defaultAccount = web3.eth.accounts[0]
    const account = web3.eth.accounts[0]
    const funds = web3.fromWei(web3.eth.getBalance(account),"ether").toString() 

    this.state = {
        web3: web3,
        exchangeAccount: account,
        funds: funds
    }
  }

  _handleAccount(value) {
    const web3 = this.state.web3
    web3.eth.defaultAccount = value;
    const funds = web3.fromWei(web3.eth.getBalance(value),"ether").toString() 
    this.setState({funds: funds})    
    this.setState({exchangeAccount: value})
    //console.log("Account is " + value)
  }

  render() {
    return (
        <div>
            <Account web3={this.state.web3} account={this.state.exchangeAccount} parentFunc={this._handleAccount.bind(this)}/>
            <AccountFunds funds={this.state.funds}/>
        </div>
    )
  }
}

AccountAdmin.propTypes = {
  web3: React.PropTypes.object
}

export default AccountAdmin