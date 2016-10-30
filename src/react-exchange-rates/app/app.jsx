import React from 'react'
import {render} from 'react-dom'
import { Link, IndexLink } from 'react-router' 

class App extends React.Component {
  
  render () {
    return (
      <div>
        <h1>Currency Exchange Administrator</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/admin" activeClassName="active">Administrator Account</Link></li>
          <li><Link to="/rates" activeClassName="active">Set Exchange Rates</Link></li>
          <li><Link to="/events" activeClassName="active">Events</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}

export default App
