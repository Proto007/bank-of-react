// src/components/UserProfile.js
// The UserProfile component is used to demonstrate the use of Route and Link.

import React, {Component} from 'react';
import Navbar from './Navbar';

class UserProfile extends Component {
  //Render items to show in UserProfile component
  render() {
    return (
        <div>
          <Navbar/>
          <h1 className='page-title'>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
    
        </div>
    );
  }
}

export default UserProfile;