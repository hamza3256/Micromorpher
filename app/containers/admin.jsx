import React from 'react'
import {AdminApp} from '../admin/containers/adminApp'

class Admin extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <AdminApp contract={this.props.contract} web3={this.props.web3} />
      </div>
    )
  }
}

Admin.propTypes = {
  contract: PropTypes.object,
  web3: PropTypes.object
}

export default Admin
