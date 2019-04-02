import React from 'react'
import PropTypes from 'prop-types'

import AdminHandler from '../../utils/adminHandler'

// import {AdminAccount, AdminFunds, ContractFunds, FundContract, FundSubmit} from '../components/admin'
import {Heading, TextOutput, TextInput, TextAreaInput, TextSelect, TextSelectPlus, FormSubmit} from '../../components/form'
import {AdminStrings} from '../../utils/outputStrings'

class Administrator extends React.Component {

  constructor(props) {
    super(props)

    this.web3Handler = this.props.web3
    this.contractHandler = this.props.contract
    this.exchanger = this.contractHandler.getExchanger()
    this.contractAddress = this.contractHandler.getAddress()
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

  _handleFundContract (_value) {
    // console.log(_value)
    this.adminHandler.setNewFunds(_value)
  }

  _getAdminFunds () {

    //console.log('getting admin funds')
    const web3 = this.web3Handler.getWeb3()
    const self = this
    web3.eth.getBalance(this.state.account, function (error, wei) {
      if (error) {
        console.log(error)
      } else {
        //console.log(wei)
        const funds = web3.utils.fromWei(wei, 'ether');
        self.adminHandler.setFunds(funds)
        self.setState({adminFunds: funds})
      }
    })
  }

  _getContractFunds () {

    //console.log('getting contract funds')
    const web3 = this.web3Handler.getWeb3()
    const self = this

    web3.eth.getBalance(this.contractAddress, function (error, wei) {
      if (error) {
        console.log(error)
      } else {
        //console.log(wei)
        const funds = web3.utils.fromWei(wei, 'ether');
        self.setState({contractFunds: funds})
      }
    })
  }

  _handleFund() {
    //console.log('handle funds')
    if (this.adminHandler.checkSet()) {
      //console.log('handling funds!')
      const self = this
      const web3 = this.web3Handler.getWeb3()
      const account = this.web3Handler.getAccount()
      this.setState({account: account})
      const funds = this.adminHandler.getNewFunds()
      const transactionObject = {from: account, to: this.contractAddress, gas: 300000, value: web3.utils.toWei(funds,"ether")}
      web3.eth.sendTransaction(transactionObject, function (error, result) {
        if (error) {
          console.log(error)
        } else {
          const info = 'Contract funded. Transaction ID: ' + result
          //console.log(info)
          self.setState({info: info})
          self.adminHandler.reset()
          self._getAdminFunds()
          self._getContractFunds()
        }
      })
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
          <TextOutput label={AdminStrings.adminAccountLabel} result={this.state.account} />
          <TextOutput label={AdminStrings.adminFundsLabel} result={this.state.adminFunds} />
          <TextOutput label={AdminStrings.contractFundsLabel} result={this.state.contractFunds}/>
          <TextInput parentFunc={this._handleFundContract.bind(this)} placeHolder={AdminStrings.fundContractPlaceholder} label={AdminStrings.fundContractLabel} />
          <FormSubmit parentFunc={this._handleFund.bind(this)} label={AdminStrings.fundSubmitLabel} buttonLabel={AdminStrings.buttonLabel} />
        </div>
      </div>
    )
  }
}

Administrator.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Administrator
