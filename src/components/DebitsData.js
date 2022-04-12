import { Component } from 'react';
import axios from 'axios';  // Library used to send asynchronous HTTP requests to RESTful endpoints (APIs)
import Debits from './Debits';

class DebitsData extends Component {
  constructor(props){  // Store received data in state's "debits" object
    super(props);
    this.state = {  // Initialize state with an empty users array
      debits: []
    }
  }

  // Make async API call to retrieve data from remote website
  async componentDidMount() {
    let linkToAPI = 'https://moj-api.herokuapp.com/debits';  // Link to remote website API

    // Await for promise (completion) returned from API call
    try {  // Accept success response as array of JSON objects (debits)
      let response = await axios.get(linkToAPI);
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
  }  

  render() {
    return ( //Debits component rendered with JSON response being the prop debits
      <Debits debits={this.state.debits}/>
    );
  }
}

export default DebitsData;