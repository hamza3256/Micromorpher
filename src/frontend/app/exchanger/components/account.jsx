import React from 'react';
import Select from 'react-select';

class Account extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleAccountChange(value) {
    this.props.parentFunc(value.label)       
  }

  render() {

    const accounts = this.props.web3.eth.accounts;
    if (accounts.length === 0) {
      console.error("Couldn't get any Ethereum accounts!")        
      return
    }
    const accs = accounts.map(function(values) {
      return { value: values, label: values}
    })

    //console.log("lfc account is " + this.props.account)

    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <Select
          searchable={this.props.searchable}
          disabled={false}
          name='Select Account'
          options={accs}
          value={this.props.account}
          onChange={this._handleAccountChange.bind(this)}
        />
      </div>
    );
  }
}

Account.propTypes = {
  web3: React.PropTypes.object,
  parentFunc: React.PropTypes.func,
  account: React.PropTypes.string, 
  searchable: React.PropTypes.bool,
  label: React.PropTypes.string
}

Account.defaultProps = {
  label: 'Accounts:',
  searchable: true
}

class AccountFunds extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.funds}</p>
      </div>
    )
  }
}

AccountFunds.propTypes = {
  funds: React.PropTypes.string,
  label: React.PropTypes.string
}

AccountFunds.defaultProps = {
  label: 'Account Funds (Ether):'
}

export {Account, AccountFunds}

