import React from 'react'
import PropTypes from 'prop-types'

import { ExchangerAppStrings } from '../utils/outputStrings'

import Home from '../exchanger/containers/home'
import AccountAdmin from '../exchanger/containers/account'
import Exchange from '../exchanger/containers/exchange'

import { Route } from 'react-router-dom'
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

class Exchanger extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <AppBar title={ExchangerAppStrings.heading}>
          <Navigation type='horizontal'>
            <ul role="nav">
              <li><Link to="/">{ExchangerAppStrings.home}</Link></li>
              <li><Link to="/account">{ExchangerAppStrings.account}</Link></li>
              <li><Link to="/exchange">{ExchangerAppStrings.exchange}</Link></li>
            </ul>
          </Navigation>
        </AppBar>

        <hr />

        <Route exact path="/" render={() => <Home />} />
        <Route path="/account" render={() => <AccountAdmin contract={this.props.contract} web3={this.props.web3} />} />
        <Route path="/exchange" render={() => <Exchange contract={this.props.contract} web3={this.props.web3} />} />
      </div>
    )
  }
}

Exchanger.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Exchanger
