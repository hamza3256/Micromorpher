import React from 'react'
import {HomeStrings} from '../utils/outputStrings'
import {Heading, TextOutput} from '../components/form'
import Markdown from 'react-markdown'

class Home extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Heading heading={HomeStrings.heading} />
        <Markdown escapeHtml={false} source={HomeStrings.info} />
        <hr />
      </div>
    )
  }
}

export default Home
