import React from 'react'
import PropTypes from 'prop-types'

import AdminHandler from '../../utils/adminHandler'

import {AdminAccount, AdminFunds, ContractFunds, FundContract, FundSubmit} from '../components/admin'
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

    const info = AdminStrings.info

    this.state = {
      account: account,
      adminFunds: '',
      contractFunds: '',
      info: info
    }

    this._getAdminFunds()
    this._getContractFunds()
  }

  setFund (_self, _result) {
    const info = 'Contract funded. Transaction ID: ' + _result
    _self.setState({info: info})
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
    //console.log('handle funds')
    if (this.adminHandler.checkSet()) {
      //console.log('handling funds!')
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
        <div className="info">
          <p>{this.state.info}</p>
          <hr />
        </div>
        <div>
          <AdminAccount label={AdminStrings.adminAccountLabel} result={this.state.account} />
          <AdminFunds label={AdminStrings.adminFundsLabel} result={this.state.adminFunds} />
          <ContractFunds label={AdminStrings.contractFundsLabel} result={this.state.contractFunds}/>
          <FundContract parentFunc={this._handleFundContract.bind(this)} placeHolder={AdminStrings.fundContractPlaceholder} label={AdminStrings.fundContractLabel} />
          <FundSubmit parentFunc={this._handleFund.bind(this)} label={AdminStrings.fundSubmitLabel} buttonLabel={AdminStrings.buttonLabel} />
        </div>
      </div>
    )
  }
}

Admin.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Admin
