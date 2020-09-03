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
  name: string
  index: number
}

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const response: Response = await fetch('https://www.anapioficeandfire.com/api/books')
    //const json: Promise<any> = await response.json();
    setBooks(await response.json());
  }

  const fetchThese = async () => {
    const response: Response = await fetch('https://www.anapioficeandfire.com/api/books')
    const body: any = await response.json()
    console.log(body) 
    return body 
  }
  
  const fetchTheseAsync = async () => {
    const response = fetch('https://www.anapioficeandfire.com/api/books')
    const response2 = fetch('https://randomuser.me/api/')
    const output = await Promise.all([response, response2])   
    console.log(output)
    return output 
  }

  return (
    <div className="App">
      <button onClick={fetchBooks}>Search</button>
       {books.map((book, index) => {
         const indexToDisplay = index += 1;
         return <div key={`book${index}`}>{indexToDisplay}&nbsp;{book.name}</div>
       })}

    <button onClick={fetchThese}>Console</button>
    <button onClick={fetchTheseAsync}>Seperate</button>
    </div>
  );
};
export default App;
