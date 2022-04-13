// src/components/Home.js
// The Home component is used to demonstrate the use of Link.

import React, {Component} from 'react';
import Navbar from './Navbar';

class Home extends Component {
  render() {
    
    //Render items to show in Home component
    return (
      <div>
        <Navbar/>
        <h1 className='page-title'>Bank of React</h1>
        <div className="big-icon">
          <img src="/logo512.png" alt="big-logo"/>
        </div>
      </div>
    );
  }
}

export default Home;