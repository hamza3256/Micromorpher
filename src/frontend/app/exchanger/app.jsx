import React from 'react'
import {render} from 'react-dom'
import { Link, IndexLink } from 'react-router' 

class App extends React.Component {
  
  render () {
    return (
      <div>
        <h1>Exchange Currency</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/account" activeClassName="active">Account</Link></li>
          <li><Link to="/exchange" activeClassName="active">Exchange Currency</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}

export default App