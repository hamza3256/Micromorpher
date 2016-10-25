import React from 'react';
import {render} from 'react-dom';
import Ethereum from './containers/web3';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Leftover Foreign Currency</h1>        
        <Ethereum/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
