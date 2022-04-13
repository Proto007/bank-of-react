// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import axios from 'axios';
import Credits from './components/Credits';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '07/23/96',
      },
      accountBalance:0,
      debits:[],
      credits:[]
    }
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    newUser.memberSince= logInInfo.memberSince
    this.setState({currentUser: newUser})
  }

  // Make async API call to retrieve data from remote website
  async componentDidMount() {
    let linkToDebitsAPI = 'https://moj-api.herokuapp.com/debits';  // Link to remote website API
    let linkToCreditsAPI = 'https://moj-api.herokuapp.com/credits';

    // Await for promise (completion) returned from API call
    try {  // Accept success response as array of JSON objects (debits)
      let response = await axios.get(linkToDebitsAPI);
      console.log(response);  // Print out response
      // To get data object in the response, need to use "response.data"
      this.setState({debits: response.data});  // Store received data in state's "debits" object
    } 
    catch (error) {  // Print out errors at console when there is an error response
      if (error.response) {
        // The request was made, and the server responded with error message and status code.
        console.log(error.response.data);  // Print out error message (e.g., Not Found)
        console.log(error.response.status);  // Print out error status code (e.g., 404)
      }    
    }
    
    // Await for promise (completion) returned from API call
    try {  // Accept success response as array of JSON objects (debits)
      let response = await axios.get(linkToCreditsAPI);
      console.log(response);  // Print out response
      // To get data object in the response, need to use "response.data"
      this.setState({credits: response.data});  // Store received data in state's "debits" object
    } 
    catch (error) {  // Print out errors at console when there is an error response
      if (error.response) {
        // The request was made, and the server responded with error message and status code.
        console.log(error.response.data);  // Print out error message (e.g., Not Found)
        console.log(error.response.status);  // Print out error status code (e.g., 404)
      }    
    }

    let getDebitsBalance= () => {
      this.state.debits.map((debit) => (
        this.setState({accountBalance: this.state.accountBalance-debit.amount})
      )) 
    }

    getDebitsBalance();

    let getCreditsBalance= () => {
      this.state.credits.map((credit) => (
        this.setState({accountBalance: this.state.accountBalance+credit.amount})
      )) 
    }

    getCreditsBalance();
  } 

  addDebit =(e)=>{
    e.preventDefault();
    let description=e.target[0].value;
    let amount=e.target[1].value;
    let date=new Date();
    let date_str=(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear();
    let id=this.state.debits.length+1;
    let newDebit={
      id: id,
      description:description,
      amount:amount,
      date:date_str  
    }
    this.setState({debits:[...this.state.debits,newDebit]});
    this.setState({accountBalance:(this.state.accountBalance-Number(amount))});
  }

  addCredit =(e)=>{
    e.preventDefault();
    let description=e.target[0].value;
    let amount=e.target[1].value;
    let date=new Date();
    let date_str=(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear();
    let id=this.state.credits.length+1;
    let newCredit={
      id: id,
      description:description,
      amount:amount,
      date:date_str  
    }
    this.setState({credits:[...this.state.credits,newCredit]});
    this.setState({accountBalance:(this.state.accountBalance+Number(amount))});
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    const HomeComponent = () => (<Home/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn}/>)  // Pass props to "LogIn" component
    const DebitsComponent = () =>(<Debits accountBalance={this.state.accountBalance} debits={this.state.debits} addDebit={this.addDebit}/>);  
    const CreditsComponent = () =>(<Credits accountBalance={this.state.accountBalance} credits={this.state.credits} addCredit={this.addCredit}/>);  
    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;