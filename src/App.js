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
      // added states to keep track of debits and credits
      accountBalance:0,
      creditsAmount:0,
      debitsAmount:0,
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
    let linkToDebitsAPI = 'https://moj-api.herokuapp.com/debits';  // Link to remote website API for debits
    let linkToCreditsAPI = 'https://moj-api.herokuapp.com/credits'; // Link to remote website API for credits

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
    try {  // Accept success response as array of JSON objects (credits)
      let response = await axios.get(linkToCreditsAPI);
      console.log(response);  // Print out response
      // To get data object in the response, need to use "response.data"
      this.setState({credits: response.data});  // Store received data in state's "credits" object
    } 
    catch (error) {  // Print out errors at console when there is an error response
      if (error.response) {
        // The request was made, and the server responded with error message and status code.
        console.log(error.response.data);  // Print out error message (e.g., Not Found)
        console.log(error.response.status);  // Print out error status code (e.g., 404)
      }    
    }

    // getDebitsBalance maps through each item of debits state
    // for each item, add amount to debitsAmount state and subtract the amount from accountBalance
    let getDebitsBalance= () => {
      this.state.debits.map((debit) => (
        this.setState({
          accountBalance: this.state.accountBalance-Number(debit.amount), // assign new values to accountBalance and creditsAmount using setState
          debitsAmount: this.state.debitsAmount + Number(debit.amount)
        })
      )) 
    }
    
    getDebitsBalance(); // call getDebitsBalance

    // getCreditsBalance maps through each item of credits state
    // for each item, add amount to creditsAmount state and add the amount to accountBalance
    let getCreditsBalance= () => {
      this.state.credits.map((credit) => (
        this.setState({
          accountBalance: this.state.accountBalance+Number(credit.amount), // assign new values to accountBalance and creditsAmount using setState
          creditsAmount: this.state.creditsAmount + Number(credit.amount)
        })
      )) 
    }

    getCreditsBalance(); // call getCreditsBalance
  } 

  // function addDebit executed when submit button is clicked in Debits component
  addDebit =(e)=>{
    e.preventDefault(); // don't allow the default behavior or submit button click
    // get the items from input fields in variables
    let description=e.target[0].value;
    let amount=e.target[1].value;
    // get the current date in mm-dd-yyyy format
    let date=new Date();
    let date_str=(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear();
    // assign a unique id based on the size of the debits array
    let id=this.state.debits.length+1;
    // create new object using the data from input field, the date and id
    let newDebit={
      id: id,
      description:description,
      amount:amount,
      date:date_str  
    }
    // update accountBalance and debitsAmount states with the amount from input field
    // update debits array state by adding the newDebit object
    this.setState({
      debits:[...this.state.debits,newDebit], 
      accountBalance:(this.state.accountBalance-Number(amount)),
      debitsAmount: this.state.debitsAmount + Number(amount)
    });
  }

  // function addCredit executed when submit button is clicked in Credits component
  addCredit =(e)=>{
    e.preventDefault(); // don't allow the default behavior or submit button click
    // get the items from input fields in variables
    let description=e.target[0].value;
    let amount=e.target[1].value;
    // get the current date in mm-dd-yyyy format
    let date=new Date();
    let date_str=(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear();
    // assign a unique id based on the size of the credits array
    let id=this.state.credits.length+1;
    // create new object using the data from input field, the date and id
    let newCredit={
      id: id,
      description:description,
      amount:amount,
      date:date_str  
    }
    // update accountBalance and creditsAmount states with the amount from input field
    // update credits array state by adding the newCredit object
    this.setState({
      credits:[...this.state.credits,newCredit], 
      accountBalance:(this.state.accountBalance+Number(amount)),
      creditsAmount: this.state.creditsAmount + Number(amount)
    });
  }

  // Create Routes and React elements to be rendered using React components
  // Props are passed to components where appropriate 
  render() {  
    const HomeComponent = () => (<Home/>);
    
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
    );
    
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn}/>)  // Pass props to "LogIn" component

    const DebitsComponent = () =>(<Debits 
      accountBalance={this.state.accountBalance} 
      debits={this.state.debits} 
      addDebit={this.addDebit} 
      creditsAmount={this.state.creditsAmount} 
      debitsAmount={this.state.debitsAmount}/>
    );  

    const CreditsComponent = () =>(<Credits 
      accountBalance={this.state.accountBalance} 
      credits={this.state.credits} 
      addCredit={this.addCredit}
      creditsAmount={this.state.creditsAmount} 
      debitsAmount={this.state.debitsAmount}/>
    );  
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