import React from 'react';
import {ExchangerHomeStrings} from '../../utils/outputStrings'

class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
            <p>{ExchangerHomeStrings.info}</p>
        </div>
    )
  }
}

export default Home
