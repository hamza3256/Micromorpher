import React from 'react'
import {HelpStrings} from '../utils/outputStrings'
import {Heading, TextOutput} from '../components/form'

import Markdown from 'react-markdown'

class Help extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Heading heading={HelpStrings.heading} />
        <Markdown escapeHtml={false} source={HelpStrings.info} />
        <hr />
      </div>
    )
  }
}

export default Help
