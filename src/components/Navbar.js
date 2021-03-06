import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        // Added navbar with links to other components
        // Navbar app logo links to the Home page
        return(
            <div className="topnav">
                <div className="topnav-left">
                    <Link to="/">
                        <img src="logo192.png" alt="react-logo" width="25" height="25"/>
                    </Link>
                </div>
                <Link to="/userProfile">Profile</Link>
                <Link to="/login">Login</Link>
                <Link to="/credits">Credits</Link>
                <Link to="/debits">Debits</Link>               
            </div>
        );
    }
}

export default Navbar;