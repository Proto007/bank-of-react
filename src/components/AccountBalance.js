// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
      <div className='balance'>
        <h2>
          Balance: {this.props.accountBalance.toFixed(2)}
          <br/>
          <br/>
          <br/>
          Credits: {this.props.creditsAmount.toFixed(2)}
          <br/>
          Debits: {this.props.debitsAmount.toFixed(2)}
        </h2>
      </div>
    );
  }
}

export default AccountBalance;