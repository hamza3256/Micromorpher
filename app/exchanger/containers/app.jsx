import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Web3Handler from '../../utils/web3Handler'
import ContractHandler from '../../utils/contractHandler'

import {ExchangerAppStrings} from '../../utils/outputStrings'

import Home from './home'
import AccountAdmin from './account'
import Exchange from './exchange'

class App extends React.Component {

  constructor (props) {
    super(props)

    const localHost = 'localhost'
    const web3Port = '8545'

    this.web3Handler = new Web3Handler(localHost, web3Port)
    this.contractHandler = new ContractHandler(this.web3Handler)
  }

  render () {
    return (
      <Router>
        <div>
          <h1>{ExchangerAppStrings.heading}</h1>
          <ul role="nav">
            <li><Link to="/">{ExchangerAppStrings.home}</Link></li>
            <li><Link to="/account">{ExchangerAppStrings.account}</Link></li>
            <li><Link to="/exchange">{ExchangerAppStrings.exchange}</Link></li>
          </ul>

          <hr />

          <Route exact path="/" render={() => <Home />} />
          <Route path="/account" render={() => <AccountAdmin contract={this.contractHandler} web3={this.web3Handler} />} />
          <Route path="/exchange" render={() => <Exchange contract={this.contractHandler} web3={this.web3Handler} />} />
        </div>
      </Router>
    )
  }
}

export default App
