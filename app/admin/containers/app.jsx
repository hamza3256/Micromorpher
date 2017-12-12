import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Web3Handler from '../../utils/web3Handler'
import ContractHandler from '../../utils/contractHandler'
import AdminExchangeHandler from '../../utils/adminExchangeHandler'

import {AdminAppStrings} from '../../utils/outputStrings'

import Home from './home'
import Admin from './admin'
import Exchanger from './exchange'
import Withdraw from './withdraw'
import EventViewer from './events'

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
          <h1>{AdminAppStrings.heading}</h1>
          <ul role="nav">
            <li><Link to="/">{AdminAppStrings.home}</Link></li>
            <li><Link to="/admin">{AdminAppStrings.admin}</Link></li>
            <li><Link to="/rates">{AdminAppStrings.exchange}</Link></li>
            <li><Link to="/withdraw">{AdminAppStrings.withdraw}</Link></li>
            <li><Link to="/events">{AdminAppStrings.events}</Link></li>
          </ul>

          <hr />

          <Route exact path="/" render={() => <Home />} />
          <Route path="/admin" render={() => <Admin contract={this.contractHandler} web3={this.web3Handler} />} />
          <Route path="/rates" render={() => <Exchanger contract={this.contractHandler} web3={this.web3Handler} />} />
          <Route path="/withdraw" render={() => <Withdraw contract={this.contractHandler} web3={this.web3Handler} />} />
          <Route path="/events" render={() => <EventViewer contract={this.contractHandler} web3={this.web3Handler} />} />
        </div>
      </Router>
    )
  }
}

export default App
