import React, {useState} from 'react';
import './App.css';
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Calculator from '../calculator/calculator'
import Spinner from 'react-bootstrap/Spinner'
import { defaultCoreCipherList } from 'constants';
import { request } from 'https';
import { getHeapCodeStatistics } from 'v8';
import { userInfo } from 'os';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';

// interface Person {
//   userId: number;
//   title: string;
// }

// const App = () => {
//   const [person, setPerson] = useState<Person>({'userId':0, 'title':''});

//   const fetchPerson = async () => {
    
//     const response: Response  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     //const body = await response.json();
//     console.log(await response.json())
//     setPerson({title:'Tim', userId:1})

//   }
//   return (
//     <div>
//         <button onClick={fetchPerson}>Submit</button>
//         {person}
//     </div>
//   )

// };

// interface Book {
//   name: string;
//   index: number;
// }

// interface User {
//   gender: string; 
//   cell: string; 
// }

// interface ToDo {
//   userId: number; 
//   title: string;
//   completed: boolean; 
// }

// const App = () => {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [user, setUser] = useState<User>({gender:'', cell:''});
//   const [todo, setTodo] = useState<ToDo>({userId:0, title:'', completed:false})
//   const [loading, setLoading] = useState(true) 

//   const fetchBooks = async () => {
//     const response = await fetch('https://www.anapioficeandfire.com/api/books')
//     const json = await response.json()
//     setBooks(json);
//   }

//   const fetchTodo = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const json = await response.json()
//     setTodo(json)
//   }

//   const fetchUser = async () => {
//     const response = await fetch('https://randomuser.me/api/')
//     const json = await response.json()
//     setUser(json.results[0])

//   }

//   const fetchEachAsync = async () => {
//     const response =  await fetch('https://www.anapioficeandfire.com/api/books')
//     setBooks(await response.json())

//     const response2 = await fetch('https://randomuser.me/api/')
//     setUser((await response2.json()).results[0])

//     const response3 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     setTodo(await response3.json())
//   }

//   const fetchPromiseAll = async () => {
//     try {
//       setBooks([])
//       const response = fetch('https://www.anapioficeandfire.com/api/books')
//       const response2 = fetch('https://randomuser.me/api/')
//       const response3 = fetch('https://jsonplaceholder.typicode.com/todos/1')
//       const [bookResponse, userResponse, todoResponse] = await Promise.all([response, response2, response3])   
//       const [bookJSON, userJSON, todoJSON] = await Promise.all([bookResponse.json(), userResponse.json(), todoResponse.json()])
//       setBooks(bookJSON)
//       setTodo(todoJSON)
//       setUser({gender: userJSON.results[0].gender, 
//               cell: userJSON.results[0].cell})
//       setLoading(false)
//     } catch(err) {
//       console.warn(err)
//     }
//   }

//   const fetchPromiseAllCleanedUp = async () => {
//     try { 
//       setLoading(true)
//       await Promise.all([
//                         fetchTodo(), 
//                         fetchBooks(), 
//                         fetchUser()
//                       ])
//       setLoading(false)
//     } catch(err) {
//       console.error(err)
//     }

//   }

//   return (
//     <div className="App">

//     <button onClick={fetchBooks}>Books</button>
//     <button onClick={fetchTodo}>ToDo</button>
//     <button onClick={fetchUser}>User</button>

//     <br/>
//     <br/>

//     <button onClick={fetchEachAsync}>Fetch Each</button>
//     <button onClick={fetchPromiseAllCleanedUp}>Promise All</button>

//     {books.map((book, index) => {
//          const indexToDisplay = index += 1;
//          return <div key={`book${index}`}>{indexToDisplay}&nbsp;{book.name}</div>
//        })}

//     <br/>

//     { loading ? <a>Loading Component</a> : <a>Not Loading</a> }

//     <a>{user.gender}</a>

//     <br/>
//     <a>{todo.title}</a>

//     </div>
//   );
// };


// Fetch the data by making a request 
// -> what is a request? 
// what is the api endpoint and what are the parameters ? 

// 'https://randomuser.me/api/'
// authentication 

// Get the response and process it 
// what does the api return


// Display the data 

// interface Person { 
//   gender: string;
//   cell: string; 
// }

// interface ToDo {
//   userId: number; 
//   title: string;
//   completed: boolean; 
// }

// interface Book {
//   url: string;
//   name: string;
// }


// const App = () => {

//   const [loading, setLoading] = useState(false) 
//   const [person, setPerson] = useState<Person>({gender:'', cell:''}); 
//   const [todo, setTodo] = useState<ToDo>({userId:0, title:'', completed:false})
//   const [books, setBooks] = useState<Book[]>([])

//   const fetchPerson = async () => {
//     const response = await fetch('https://randomuser.me/api/');
//     const json = await response.json();
//     setPerson(json.results[0])
//   }

//   const fetchTodo = async () => {
//     setLoading(true)
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const json = await response.json();
//     setTodo(json)
//     setLoading(false)
//   }

//   const fetchBooks = async () => {
//     const response = await fetch('https://www.anapioficeandfire.com/api/books')
//     const json = await response.json();
//     setBooks(json)
//   }
//   const getJson = async (url: RequestInfo) => {
//     const response = await fetch(url)
//     return await response.json()
//   }

//   const fetchAll = async () => {
//     try { 
//       setLoading(true)
//       const [p ,t, b] = await Promise.all([
//                                         getJson('https://randomuser.me/api/'), 
//                                         getJson('https://jsonplaceholder.typicode.com/todos/1'),
//                                         getJson('https://www.anapioficeandfire.com/api/books')
//                                       ])
//       setPerson(p.results[0])
//       setTodo(t) 
//       setBooks(b)
//       setLoading(false)      
//       const newPerson: Person = {gender:p.results[0].gender, cell:p.results[0].cell}
//       const bs: Book[] = b.map((item: any) => ({'name':item.name, 'url':item.url}))
//       console.log(bs)
//     } catch(error) {
//       console.error(error)
//     }
//   }

//   const clear = () => {
//       setBooks([])
//       setTodo({userId:0, title:'', completed:false})
//       setPerson({gender:'', cell:''})
//   }

//   return (
//       <div>
//         <button onClick={clear}>Clear</button>
//         <button onClick={fetchTodo}>Get Todo</button>
//         <button onClick={fetchPerson}>Get Person</button>
//         <button onClick={fetchAll}>Get All</button> 
//         <br/>
//           {loading ? (
//                       <Spinner animation="border" role="status">
//                       <span className="sr-only">Loading...</span>
//                       </Spinner>) 
//                     :  
//                       <a>{todo.title} {person.gender}</a> 
//           }

//           { books.length != 0 ? books.map(item => (<a>{item.name}</a>)) : <a></a>}

//       </div>

//   )
// }

/*


  client ---- server/api ----- database 
    x

High Level Steps and Concepts   

  1. Send the request to API 
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
  // https://api.airtable.com/blocks/<user_id> 


Step 2. Response
  What is the structure of the response we are receiving? 
  What does it look like ? 


interface User {
  name: string;
  id: number;
}

interface Block {
  blockID: number;
  type: string; 
  axis: string[] 
  values: number[]; 
  createdBy: string; 
  createdOn: string;  
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
  - pros: 
    - fetch isn't blocking the main thread, we can continue executing the function foo(), bar(), baz() 
  - cons: 
    - response.json() depends on response resolving first.  
    - How can we guarantee? 

Promises  
  - best of both worlds
  - Promise allows us to not block out code 
  - guarantees that the .then will execute only after the promise resolves

Async/Await
  - Syntactical sugar over Promises 
  - pauses our function on the await line until fetch resolves 
  - doesn't block our main thread so user can use the site 
  - reads like familiar syncronous code 

                  
call             fetchBlockData() 
stack   = [      main()             ] 
 
event loop    <---> 

event queue = [    fetch()      ]

web apis  = [      ]




client    ------   api    ------   db 
<-  x 



1. Send the HTTP request

    client -> user's browser 
    api -> server 

    talk via http requests 
      - we will be using a GET request here 


2. Receive the response 

    Headers, status codes, 
    body -> contains the data that we want to display to the user
    

3. Display the data to the user 


Scope
1. API Signature 
  - what are the parameters 
  - what is the endpoint 

  api endpoint: https://www.airtable.com/api/blocks/<userID>


2. The Response
  - What does the body of that response look like? 


interface Blocks {
  userID: number; 
  blockID: number; 
  blockType: string; 
  data: string[];
  createdOn: string;
}


3. Authentication 
  - API Key 
  - passed in query string parameter for GET request



web apis = [             ]
 

event  = [              ]
queue 

micro
task   = [      fetch().then()       ]
queue 

event
loop 
              
                  
call              fetchBlocks()
stack    = [      main()       ] 

*/



interface ToDo {
  userId: number; 
  title: string;
  completed: boolean; 
}

const App = () => {
  const [todo, setTodo] = useState<ToDo>({userId:0, title:'', completed:false})


  const fetchBlocks = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
      const json = await response.json(); 
      console.log(todo)
      setTodo(json)      
      console.log(todo)
    } catch(err) {
      console.error(err)
    }

    // fetch('https://jsonplaceholder.typicode.com/todos/3')
    // .then(response => response.json())
    // .then(json => {
    //   setTodo(json)
    //   console.log(todo)
    // })
  }
  return (
    <div>
          <button onClick={fetchBlocks}>This</button>
    </div>
  )

}
export default App;
