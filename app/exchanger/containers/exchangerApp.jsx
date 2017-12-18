import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {ExchangerAppStrings} from '../../utils/outputStrings'

import Home from './home'
import AccountAdmin from './account'
import Exchange from './exchange'

class ExchangerApp extends React.Component {

  constructor (props) {
    super(props)
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

ExchangerApp.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default ExchangerApp
