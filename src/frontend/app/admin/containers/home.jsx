import React from 'react';
import {AdminHomeStrings} from '../../utils/outputStrings'

class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
            <p>{AdminHomeStrings.info}</p>
        </div>
    )
  }
}

export default Home
