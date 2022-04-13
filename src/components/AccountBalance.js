// src/components/AccountBalance.js
// Account balance component is used in Credits and Debits components to show account balance, total credits and total debits
import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
      //className added for styling in index.css
      //accountBalance, creditsAmount, debitAmount are props passed from other components
      //toFixed function used to change the props to 2 decimal places
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