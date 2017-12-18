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

class Admin extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <AppBar title={AdminAppStrings.heading}>
          <Navigation type='horizontal'>
            <ul role="nav">
              <li><Link to="/">{AdminAppStrings.home}</Link></li>
              <li><Link to="/admin">{AdminAppStrings.admin}</Link></li>
              <li><Link to="/rates">{AdminAppStrings.exchange}</Link></li>
              <li><Link to="/withdraw">{AdminAppStrings.withdraw}</Link></li>
              <li><Link to="/events">{AdminAppStrings.events}</Link></li>
            </ul>
          </Navigation>
        </AppBar>

        <hr />

        <Route exact path="/" render={() => <Home />} />
        <Route path="/admin" render={() => <Administrator contract={this.props.contract} web3={this.props.web3} />} />
        <Route path="/rates" render={() => <Exchanger contract={this.props.contract} web3={this.props.web3} />} />
        <Route path="/withdraw" render={() => <Withdraw contract={this.props.contract} web3={this.props.web3} />} />
        <Route path="/events" render={() => <EventViewer contract={this.props.contract} web3={this.props.web3} />} />
      </div>
    )
  }
}

Admin.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Admin
