// src/components/Login.js
// The LogIn component is used to demonstrate the use of Redirect.

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar'

class LogIn extends Component {
  constructor () {  // Create and initialize state
    super()
    this.state = {
      user: {
        userName: '',
        password: '',
        memberSince: '' // added memberSince to keep track of the day logged in
      },
      redirect: false
    }
  }

  // When the user name input is changed, capture the input and update the state (user.userName)
  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue
    //Set memberSince state of updated user equal to current date in mm/dd/yyyy format
    let date=new Date()
    updatedUser['memberSince']=(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()
    this.setState({user: updatedUser})
  }

  // When user clicked "Log In" button, store user data and then redirect to "User Profile" page
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }
  
  render () {
    if (this.state.redirect) {  // Redirect to "User Profile" page when "Log In" button is clicked
      return (<Redirect to="/userProfile"/>)
    }
    // Render the login form
    return (
      <div>
        <Navbar/>
        <h1 className='page-title'>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>                  
      </div>
    )
  }
}

export default LogIn