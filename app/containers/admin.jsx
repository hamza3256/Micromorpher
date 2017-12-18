import React from 'react'
import PropTypes from 'prop-types'

import { AdminAppStrings } from '../utils/outputStrings'

import Home from '../admin/containers/home'
import Administrator from '../admin/containers/administrator'
import Exchanger from '../admin/containers/exchange'
import Withdraw from '../admin/containers/withdraw'
import EventViewer from '../admin/containers/events'

import { Route } from 'react-router-dom'
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

import {rTComponents, rTLayout} from '../components/theme'

class Admin extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <AppBar title={AdminAppStrings.heading}>
          <Navigation type='horizontal'>
            <Link className={rTComponents.linkPrimary} href="#/admin">{AdminAppStrings.home}</Link>
            <Link className={rTComponents.linkPrimary} href="#/admin/user">{AdminAppStrings.admin}</Link>
            <Link className={rTComponents.linkPrimary} href="#/admin/rates">{AdminAppStrings.exchange}</Link>
            <Link className={rTComponents.linkPrimary} href="#/admin/withdraw">{AdminAppStrings.withdraw}</Link>
            <Link className={rTComponents.linkPrimary} href="#/admin/events">{AdminAppStrings.events}</Link>
          </Navigation>
        </AppBar>

        <hr />

        <Route exact path="/admin" component={Home} />
        <Route path="/admin/user" render={() => <Administrator contract={this.props.contract} web3={this.props.web3} />} />
        <Route path="/admin/rates" render={() => <Exchanger contract={this.props.contract} web3={this.props.web3} />} />
        <Route path="/admin/withdraw" render={() => <Withdraw contract={this.props.contract} web3={this.props.web3} />} />
        <Route path="/admin/events" render={() => <EventViewer contract={this.props.contract} web3={this.props.web3} />} />
      </div>
    )
  }
}

Admin.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Admin
