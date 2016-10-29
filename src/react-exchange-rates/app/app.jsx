import React from 'react'
import {render} from 'react-dom'
import { Link } from 'react-router' 

class App extends React.Component {
  
  render () {
    return (
      <div>
        <h1>Exchange Currency Admin</h1>
        <ul role="nav">
          <li><Link to="/admin" activeClassName="active">Admin' Account</Link></li>
          <li><Link to="/rates" activeClassName="active">Set Exchange Rates</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}

export default App
