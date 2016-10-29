import React from 'react'     
import {AdminAccount, AdminFunds, ContractFunds, FundContract, FundSubmit} from '../components/admin'

class Admin extends React.Component {

  constructor(props) {
    super(props)

    const web3 = this.props.route.web3    
    const contractAddress = this.props.route.contractAddress
    const latestFilter = web3.eth.filter('latest')
    const acc = web3.eth.accounts[0]  
    const adminFunds = web3.fromWei(web3.eth.getBalance(acc),"ether").toString()   
    const contractFunds = web3.fromWei(web3.eth.getBalance(contractAddress),"ether").toString() 
    const newFunds = ""
    const txHash = ""

    this.state = {
        web3: web3,
        latest: latestFilter,
        txHash: txHash,
        contractAddress: contractAddress,
        account: acc,
        adminFunds: adminFunds,
        contractFunds: contractFunds,
        contractNewFunds: newFunds
    }

    this._latestBlock()

  }

  _latestBlock() {
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
  }

  _handleFundContract(value) {
    console.log("Funded contract with " + value)
    this.setState({contractNewFunds: value})
  }

  _handleFund() {
    const web3 = this.state.web3
    const contractAddress = this.state.contractAddress
    const funds = this.state.contractNewFunds
    const adminAccount = this.state.account
    const tx = web3.eth.sendTransaction({from: adminAccount, to: contractAddress, value: web3.toWei(funds,"ether")})
    this.setState({txHash: tx})
    console.log("Submitted funds " + funds)    
  }

  render() {
    return (
        <div>
            <AdminAccount address={this.state.account}/>
            <AdminFunds funds={this.state.adminFunds}/>
            <ContractFunds funds={this.state.contractFunds}/> 
            <FundContract ether={this.state.contractNewFunds} parentFunc={this._handleFundContract.bind(this)}/>
            <FundSubmit parentFunc={this._handleFund.bind(this)}/>
        </div>
    )
  }

  componentWillUnmount() {
    const filter = this.state.latest
    filter.stopWatching
  }
}

Admin.propTypes = {
  web3: React.PropTypes.object,
  contractAddress: React.PropTypes.string
}

export default Admin