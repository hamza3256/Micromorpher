import React from 'react'
import PropTypes from 'prop-types'
import {Logger} from '../components/logger'

import {AdminEventViewerStrings} from '../../utils/outputStrings'

class EventViewer extends React.Component {

  constructor(props) {
    super(props)

    const web3 = this.props.web3
    const constractHander = this.props.contract
    const exchanger = constractHander.getExchanger()

    this.state = {
      log: []
    }
  }

  _logResult (result) {
    // const time = Date.now().toString()
    const date = new Date().toString()
    const logResults = date + ': ' + result
    let logs = this.state.log
    logs.push(logResults)
    // console.log(logResults)
    this.setState({ log: logs })
  }

  _allEvents () {
    const self = this
    const allEvt = this.exchanger.allEvents({}, {fromBlock: 1, toBlock: 'latest'})
    allEvt.watch(function (e, result) {
      self._logResult(result)
    })
  }

  render () {
    return (
      <div>
        <div className="info">
          <p>{AdminEventViewerStrings.info}</p>
          <hr />
        </div>
        <div><p><b>Developer Note</b> - Not quite working, for some reason</p></div>
      </div>
    )
  }

  /* <div>
    <div className="info">
      <p>{AdminEventViewerStrings.info}</p>
      <hr />
    </div>
    <div>
      <Logger heading={AdminEventViewerStrings.heading} log={this.state.log} />
      <hr />
    </div>
  </div> */

  /* componentDidMount () {
    this._allEvents()
  }

  componentWillUnmount () {
    this.exchanger.allEvents().stopWatching()
    this.props.web3.getWeb3().reset()
  }*/
}

EventViewer.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default EventViewer
