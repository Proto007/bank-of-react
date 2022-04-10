import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div className="topnav">
                <Link to="/userProfile">User Profile</Link>
                <Link to="/login">Login</Link>
                <Link to="">Credits</Link>
                <Link to="">Debits</Link>
                <div className="topnav-right">
                    <Link to="/">
                        <img src="/logo192.png" alt="react-logo" width="25" height="25"/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;