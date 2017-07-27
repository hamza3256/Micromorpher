import React from 'react';
import {HomeStrings} from '../utils/outputStrings'

class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
            <p>{HomeStrings.info}</p>
        </div>
    )
  }
}

export default Home
