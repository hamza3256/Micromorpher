import React from 'react'
import {ExchangerApp} from '../exchanger/containers/exchangerApp'

class Exchange extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <ExchangerApp contract={this.props.contract} web3={this.props.web3} />
      </div>
    )
  }
}

Exchange.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Exchange
