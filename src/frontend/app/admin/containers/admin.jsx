import React from 'react'
import PropTypes from 'prop-types'

import AdminHandler from '../../utils/adminHandler'

import {AdminAccount, AdminFunds, ContractFunds, FundContract, FundSubmit, FundsSubmitted} from '../components/admin'
import {AdminStrings} from '../../utils/outputStrings'

class Admin extends React.Component {

  constructor(props) {
    super(props)

    this.web3Handler = this.props.web3
    this.contractHander = this.props.contract
    this.exchanger = this.contractHander.getExchanger()
    this.contractAddress = this.contractHander.getAddress()
    this.adminHandler = new AdminHandler()
    const account = this.web3Handler.getAccount()

    this.state = {
      account: account,
      adminFunds: '',
      contractFunds: '',
      result: ""
    }

    this._getAdminFunds()
    this._getContractFunds()

    // this._latestBlock()

  }

  /* _latestBlock() {
    const thisJs = this
    const filter = this.state.latest
    const web3 = this.state.web3
    const contractAddress = this.state.contractAddress
    const adminAccount = this.state.account

    filter.watch(function (error, result) {
      if (error) {
        console.error(error)
      } else {
        const thisTx = thisJs.state.txHash
        console.log("State transaction " + thisTx)
        const block = web3.eth.getBlock(result, true)
        const transactions = block.transactions
        for(let i = 0; i < transactions.length; i++)
        {
          console.log("block transaction " + transactions[i].hash)
          if( thisTx == transactions[i].hash ){
            console.log("Got match!")
            const adminFunds = web3.fromWei(web3.eth.getBalance(adminAccount),"ether").toString()
            const contractFunds = web3.fromWei(web3.eth.getBalance(contractAddress),"ether").toString()
            thisJs.setState({adminFunds: adminFunds})
            thisJs.setState({contractFunds: contractFunds})
            break
          }
        }
      }
    })
  } */

  setFund (_self, _result) {
    _self.setState({result: _result})
    _self.adminHandler.reset()
    _self._getAdminFunds()
    _self._getContractFunds()
  }

  setAdminFunds (_self, _result) {
    const web3 = _self.web3Handler.getWeb3()
    const adminFunds = web3.fromWei(_result,"ether").toString()
    _self.adminHandler.setFunds(_result)
    _self.setState({adminFunds: adminFunds})
  }

  setContractFunds (_self, _result) {
    const web3 = _self.web3Handler.getWeb3()
    const contractFunds = web3.fromWei(_result,"ether").toString()
    _self.setState({contractFunds: contractFunds})
  }

  _handleFundContract (_value) {
    console.log(_value)
    this.adminHandler.setNewFunds(_value)
  }

  _getAdminFunds () {
    const web3 = this.web3Handler.getWeb3()
    const params = [this.state.account]
    this.web3Handler.callParamHandler(this, web3.eth.getBalance, params, this.setAdminFunds, false)
  }

  _getContractFunds () {
    const web3 = this.web3Handler.getWeb3()
    const params = [this.contractAddress]
    this.web3Handler.callParamHandler(this, web3.eth.getBalance, params, this.setContractFunds, false)
  }

  _handleFund() {
    console.log('handle funds')
    if (this.adminHandler.checkSet()) {
      console.log('handling funds!')
      const web3 = this.web3Handler.getWeb3()
      const account = this.web3Handler.getAccount()
      this.setState({account: account})
      const funds = this.adminHandler.getNewFunds()
      const params = [{from: account, to: this.contractAddress, value: web3.toWei(funds,"ether")}]
      this.web3Handler.callParamHandler(this, web3.eth.sendTransaction, params, this.setFund, false)
    }
  }

  render() {
    return (
        <div>
          <AdminAccount label={AdminStrings.adminAccountLabel} result={this.state.account} />
          <AdminFunds label={AdminStrings.adminFundsLabel} result={this.state.adminFunds} />
          <ContractFunds label={AdminStrings.contractFundsLabel} result={this.state.contractFunds}/>
          <FundContract parentFunc={this._handleFundContract.bind(this)} placeHolder={AdminStrings.fundContractPlaceholder} label={AdminStrings.fundContractLabel} />
          <FundSubmit parentFunc={this._handleFund.bind(this)} label={AdminStrings.fundSubmitLabel} buttonLabel={AdminStrings.buttonLabel} />
          <FundsSubmitted label={AdminStrings.submittedResultLabel} result={this.state.result}/>
        </div>
    )
  }

  componentWillUnmount() {
    const filter = this.state.latest
    filter.stopWatching
  }
}

Admin.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Admin
