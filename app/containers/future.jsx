import React from 'react'
import {FutureStrings} from '../utils/outputStrings'
import {Heading, TextOutput} from '../components/form'
import Markdown from 'react-markdown'

class Future extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Heading heading={FutureStrings.heading} />
        <Markdown escapeHtml={false} source={FutureStrings.info} />
        <hr />
      </div>
    )
  }
}

export default Future
