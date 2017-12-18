import React from 'react'
import {HelpStrings} from '../utils/outputStrings'
import {Heading, TextOutput} from '../components/form'

class Help extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Heading heading={HelpStrings.heading} />
        <TextOutput text={HelpStrings.info} />
        <hr />
      </div>
    )
  }
}

export default Help
