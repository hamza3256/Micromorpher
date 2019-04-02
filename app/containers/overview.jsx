import React from 'react'
import {OverviewStrings} from '../utils/outputStrings'
import {Heading, TextOutput} from '../components/form'
import Markdown from 'react-markdown'

class Overview extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Heading heading={OverviewStrings.heading} />
        <Markdown escapeHtml={false} source={OverviewStrings.info} />
        <hr />
      </div>
    )
  }
}

export default Overview
