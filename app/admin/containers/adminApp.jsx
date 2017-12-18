import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'

class AdminApp extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>{AdminAppStrings.heading}</h1>

        /* <ul role="nav">
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

        */
      </div>
    )
  }
}

AdminApp.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default AdminApp
