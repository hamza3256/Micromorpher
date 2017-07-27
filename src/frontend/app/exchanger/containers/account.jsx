import React from 'react'
import {Account, AccountFunds} from '../components/account'

class AccountAdmin extends React.Component {

  constructor(props) {
    super(props)

    this.web3Handler = this.props.web3
    const contractHander = this.props.contract
    this.exchanger = contractHander.getExchanger()
    const account = this.web3Handler.getAccount()
    const funds = web3.fromWei(web3.eth.getBalance(account),"ether").toString()

    this.state = {
      account: account,
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
            <Account web3={this.state.web3} account={this.state.account} parentFunc={this._handleAccount.bind(this)}/>
            <AccountFunds funds={this.state.funds}/>
        </div>
    )
  }
}

AccountAdmin.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default AccountAdmin
