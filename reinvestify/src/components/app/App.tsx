import React, {useState} from 'react';
import './App.css';
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Calculator from '../calculator/calculator'


interface Person { 
  gender: string;
  cell: string; 
}

interface ToDo {
  userId: number; 
  title: string;
  completed: boolean; 
}

interface Book {
  title: string;
}


const App = () => {

  const [loading, setLoading] = useState(false) 
  const [person, setPerson] = useState<Person>({gender:'', cell:''}); 
  const [todo, setTodo] = useState<ToDo>({userId:0, title:'', completed:false})
  const [books, setBooks] = useState<Book[]>([])

  const fetchPerson = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const json = await response.json();
    setPerson(json.results[0])
  }

  const fetchTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    setTodo(json)
  }

  const fetchBooks = async () => {
    const response = await fetch('https://www.anapioficeandfire.com/api/books')
    const json = await response.json();
    setBooks(json)
  }
  const getJson = async (url: any): Promise<any> => {
    const response = await fetch(url)
    return await response.json()
  }

  const fetchAll = async () => {
    try { 
      setLoading(true)
      const [p ,t, b] = await Promise.all([
                                        getJson('https://randomuser.me/api/'), 
                                        getJson('https://jsonplaceholder.typicode.com/todos/1'),
                                        getJson('https://www.anapioficeandfire.com/api/books')
                                      ])
      setPerson(p.results[0])
      setTodo(t) 
      setBooks(b)
      console.log(books)
      setLoading(false)      
      const newPerson: Person = {gender:p.results[0].gender, cell:p.results[0].cell}
      console.log(newPerson)
    } catch(error) {
      console.error(error)
    }
  }

  const clear = async () => {
      setBooks([])
      setTodo({userId:0, title:'', completed:false})
      setPerson({gender:'', cell:''})
  }

  return (
      <div>
        <button onClick={clear}>Clear</button>
        <button onClick={fetchTodo}>Get Todo</button>
        <button onClick={fetchPerson}>Get Person</button>
        <button onClick={fetchAll}>Get All</button> 
        <br/>
          {loading ? <a>Loading</a> :  <a>{todo.title} {person.gender}</a> }

          { books.length != 0 ? <a>{books[0].title}</a> : <a></a>}

      </div>

  )
}
export default App;
