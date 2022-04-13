// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
      <h2 className='account-balance'>
        Balance: {this.props.accountBalance}
      </h2>
    );
  }
}

export default AccountBalance;