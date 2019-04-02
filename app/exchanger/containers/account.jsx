import React from 'react'
import PropTypes from 'prop-types'

// import {Account, AccountFunds} from '../components/account'

import {Heading, TextOutput, TextInput, TextAreaInput, TextSelect, TextSelectPlus, FormSubmit} from '../../components/form'
import {ExchangerAccountStrings} from '../../utils/outputStrings'

class AccountAdmin extends React.Component {

  constructor(props) {
    super(props)

    this.web3Handler = this.props.web3
    const contractHander = this.props.contract
    this.exchanger = contractHander.getExchanger()
    const account = this.web3Handler.getAccount()
    const funds = web3.utils.fromWei(web3.eth.getBalance(account),"ether").toString()

    this.state = {
      account: account,
      funds: funds
    }

    //this._getFunds()
  }

  /*setFunds (_self, _result) {
    const web3 = _self.web3Handler.getWeb3()
    const funds = web3.utils.fromWei(_result,"ether").toString()
    _self.setState({funds: funds})
  }

  _getFunds () {
    const web3 = this.web3Handler.getWeb3()
    const account = this.web3Handler.getAccount()
    const params = [this.state.account, {from: account}]
    const funds = web3.utils.fromWei(web3.eth.getBalance(account),"ether").toString()
    this.web3Handler.callParamHandler(this, web3.eth.getBalance, params, this.setFunds, true)
  }*/

  _handleAccount(value) {
    const web3 = this.state.web3
    web3.eth.defaultAccount = value;
    const funds = web3.utils.fromWei(web3.eth.getBalance(value),"ether").toString()
    this.setState({funds: funds})
    this.setState({exchangeAccount: value})
    //console.log("Account is " + value)
  }

  render() {
    return (
      <div>
        <div>
          <p>{ExchangerAccountStrings.info}</p>
          <hr />
        </div>
        <div>
          <TextOutput label={ExchangerAccountStrings.accountLabel} result={this.state.account}/>
          <TextOutput label={ExchangerAccountStrings.accountFundsLabel} result={this.state.funds}/>
        </div>
      </div>
    )
  }
}

AccountAdmin.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default AccountAdmin
