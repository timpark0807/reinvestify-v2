import React, {useState} from 'react';
import './App.css';
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Calculator from '../calculator/calculator'

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

interface Book {
  name: string;
  index: number;
}

interface User {
  gender: string; 
  cell: string; 
}

interface ToDo {
  userId: number; 
  title: string;
  completed: boolean; 
}

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [user, setUser] = useState<User>({gender:'', cell:''});
  const [todo, setTodo] = useState<ToDo>({userId:0, title:'', completed:false})
  const [loading, setLoading] = useState(true) 

  const fetchBooks = async () => {
    const response = await fetch('https://www.anapioficeandfire.com/api/books')
    const json = await response.json()
    setBooks(json);
  }

  const fetchTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await response.json()
    setTodo(json)
  }

  const fetchUser = async () => {
    const response = await fetch('https://randomuser.me/api/')
    const json = await response.json()
    setUser(json.results[0])

  }

  const fetchEachAsync = async () => {
    const response =  await fetch('https://www.anapioficeandfire.com/api/books')
    setBooks(await response.json())

    const response2 = await fetch('https://randomuser.me/api/')
    setUser((await response2.json()).results[0])

    const response3 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    setTodo(await response3.json())
  }

  const fetchPromiseAll = async () => {
    try {
      setBooks([])
      const response = fetch('https://www.anapioficeandfire.com/api/books')
      const response2 = fetch('https://randomuser.me/api/')
      const response3 = fetch('https://jsonplaceholder.typicode.com/todos/1')
      const [bookResponse, userResponse, todoResponse] = await Promise.all([response, response2, response3])   
      const [bookJSON, userJSON, todoJSON] = await Promise.all([bookResponse.json(), userResponse.json(), todoResponse.json()])
      setBooks(bookJSON)
      setTodo(todoJSON)
      setUser({gender: userJSON.results[0].gender, 
              cell: userJSON.results[0].cell})
      setLoading(false)
    } catch(err) {
      console.warn(err)
    }
  }

  const fetchPromiseAllCleanedUp = async () => {
    try { 
      setLoading(true)
      await Promise.all([
                        fetchTodo(), 
                        fetchBooks(), 
                        fetchUser()
                      ])
      setLoading(false)
    } catch(err) {
      console.error(err)
    }

  }

  return (
    <div className="App">

    <button onClick={fetchBooks}>Books</button>
    <button onClick={fetchTodo}>ToDo</button>
    <button onClick={fetchUser}>User</button>

    <br/>
    <br/>

    <button onClick={fetchEachAsync}>Fetch Each</button>
    <button onClick={fetchPromiseAllCleanedUp}>Promise All</button>

    {books.map((book, index) => {
         const indexToDisplay = index += 1;
         return <div key={`book${index}`}>{indexToDisplay}&nbsp;{book.name}</div>
       })}

    <br/>

    { loading ? <a>Loading Component</a> : <a>Not Loading</a> }

    <a>{user.gender}</a>

    <br/>
    <a>{todo.title}</a>

    </div>
  );
};
export default App;
