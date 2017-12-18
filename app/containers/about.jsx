import React from 'react'
import {AboutStrings} from '../utils/outputStrings'
import {Heading, TextOutput} from '../components/form'

class About extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Heading heading={AboutStrings.heading} />
        <TextOutput text={AboutStrings.info} />
        <hr />
      </div>
    )
  }
}

export default About
