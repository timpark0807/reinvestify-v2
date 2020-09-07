import React, {useState} from 'react';
import './App.css';
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Calculator from '../calculator/calculator'
import Spinner from 'react-bootstrap/Spinner'
import { defaultCoreCipherList } from 'constants';

/*


  client ---- server/api ----- database 
    <-

High Level Steps and Concepts   

  1. Send the request for data 
      from client to server  
      client = our users browser
      server = our backend, an api endpoint 

      request -> HTTP -> Hypertext Transfer Protocol
        Allows computers and services to talk to each other 
        Different verbs. Use GET 
        Send our parameters through the query string parameters 

  2. Receive the response and process it 
      Typically our response will contain information such as header, status code, 
      What we REALLY care about is the body
      we need a way to parse the response and cast the data inside the body into an object 

  3. Display the data to the end user 


Scoping the Steps 

Step 1. API Endpoint
  What are our parameters ? 
  What is the end point ? 
  // https://api.airtable.com/blocks/<id> 


Step 2. Response
  What is the structure of the response we are receiving? 
  What does it look like ? 


interface User {
  name: string;
  id: number;
}

interface Block {
  data: string; 
}

// 3. Authentication
// API Key. Can be sent via Query String Parameter of 


write out the function fetchBlockData

walk through what would happen in syncronous languages
  - call stack
  - downside of blocking code imagine if fetch took 30 seconds 

walk through why this wouldn't work in javascript 
  - call stack
  - web apis
  - event queue
  - event loop 
  - pros: fetch isn't blocking the main thread  
  - cons: we're going to throw an error 

introduce Promises/async await keywords 
  - best of both worlds
  - pauses our function on the await line until fetch resolves 
  - doesn't block our main thread so user can use the site 

call             fetchBlockData() 
stack   = [      main()             ] 
 
event loop    <---> 

event queue = [    fetch()      ]

web apis  = [      ]

*/


const App = () => {

  const fetchBlockData = async () => {
    const response = await fetch('https://randomuser.me/api/')
    const json = await response.json()
  }

  return (
    <div>
          <button onClick={fetchBlockData}>This</button>
    </div>
  )

}
export default App;
