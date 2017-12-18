import React from 'react'
import {HomeStrings} from '../utils/outputStrings'
import {Heading, TextOutput} from '../components/form'

class Home extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Heading heading={HomeStrings.heading} />
        <TextOutput text={HomeStrings.info} />
        <hr />
      </div>
    )
  }
}

export default Home
