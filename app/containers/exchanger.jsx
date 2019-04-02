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

import {rTComponents, rTLayout} from '../components/theme'

class Exchanger extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <AppBar title={ExchangerAppStrings.heading}>
          <Navigation type='horizontal'>
            <Link className={rTComponents.linkPrimary} href="#/exchanger">{ExchangerAppStrings.home}</Link>
            <Link className={rTComponents.linkPrimary} href="#/exchanger/admin">{ExchangerAppStrings.account}</Link>
            <Link className={rTComponents.linkPrimary} href="#/exchanger/exchange">{ExchangerAppStrings.exchange}</Link>
          </Navigation>
        </AppBar>

        <hr />

        <Route exact path="/exchanger" component={Home} />
        <Route path="/exchanger/admin" render={() => <AccountAdmin contract={this.props.contract} web3={this.props.web3} />} />
        <Route path="/exchanger/exchange" render={() => <Exchange contract={this.props.contract} web3={this.props.web3} />} />
      </div>
    )
  }
}

Exchanger.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Exchanger
