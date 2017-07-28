import React from 'react'
import PropTypes from 'prop-types'

import {Account, AccountFunds} from '../components/account'

import {ExchangerAccountStrings} from '../../utils/outputStrings'

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

    this._getFunds()
  }

  setFunds (_self, _result) {
    const web3 = _self.web3Handler.getWeb3()
    const funds = web3.fromWei(_result,"ether").toString()
    _self.setState({funds: funds})
  }

  _getFunds () {
    const web3 = this.web3Handler.getWeb3()
    const params = [this.state.account]
    this.web3Handler.callParamHandler(this, web3.eth.getBalance, params, this.setFunds, false)
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
          <Account label={ExchangerAccountStrings.accountLabel} result={this.state.account}/>
          <AccountFunds label={ExchangerAccountStrings.accountFundsLabel} result={this.state.funds}/>
        </div>
    )
  }
}

AccountAdmin.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default AccountAdmin