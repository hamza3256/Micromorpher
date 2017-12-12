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
        <hr />
      </div>
    )
  }
}

export default Home
