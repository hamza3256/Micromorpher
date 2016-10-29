import React from 'react';
import Select from 'react-select';

class LFCAccounts extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleAccountChange(value) {
    this.props.parentFunc(value.label)       
  }

  render() {

    const accs = this.props.accounts.map(function(values) {
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

LFCAccounts.propTypes = {
  parentFunc: React.PropTypes.func,
  accounts: React.PropTypes.array,
  account: React.PropTypes.string, 
  searchable: React.PropTypes.bool,
  label: React.PropTypes.string
}

LFCAccounts.defaultProps = {
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

export {LFCAccounts, AccountFunds}

