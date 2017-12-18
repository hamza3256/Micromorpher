import React from 'react'
import {OverviewStrings} from '../utils/outputStrings'
import {Heading, TextOutput} from '../components/form'

class Overview extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Heading heading={OverviewStrings.heading} />
        <TextOutput text={OverviewStrings.info} />
        <hr />
      </div>
    )
  }
}

export default Overview
