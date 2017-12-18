import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {AdminAppStrings} from '../../utils/outputStrings'

import Home from './home'
import Admin from './admin'
import Exchanger from './exchange'
import Withdraw from './withdraw'
import EventViewer from './events'

class AdminApp extends React.Component {

  constructor (props) {
    super(props)
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
          <Route path="/admin" render={() => <Admin contract={this.props.contract} web3={this.props.web3} />} />
          <Route path="/rates" render={() => <Exchanger contract={this.props.contract} web3={this.props.web3} />} />
          <Route path="/withdraw" render={() => <Withdraw contract={this.props.contract} web3={this.props.web3} />} />
          <Route path="/events" render={() => <EventViewer contract={this.props.contract} web3={this.props.web3} />} />
        </div>
      </Router>
    )
  }
}

AdminApp.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default AdminApp
