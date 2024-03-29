import React from 'react'
import {AboutStrings} from '../utils/outputStrings'
import {Heading, TextOutput} from '../components/form'

import Markdown from 'react-markdown'

class About extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Heading heading={AboutStrings.heading} />
        <Markdown escapeHtml={false} source={AboutStrings.info} />
        <hr />
      </div>
    )
  }
}

export default About
