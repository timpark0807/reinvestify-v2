import React, {useState} from 'react';

const ToDo = () => {

    const [toDos, setTodos] = useState([''])
    const [toDo, setTodo] = useState('') 
    
    function addTodo() {
        setTodos([...toDos, toDo])
        setTodo('')
    }

    function changeTodo(event: React.ChangeEvent<HTMLInputElement>) {
        setTodo(event.target.value)
    }

    return (
      <div>
          <ul>
          {
            toDos.length > 1 
              ? 
                toDos.map(item => (
                            <span> <li key={item.toString()}>{item}<button>X</button></li> </span>
                            ))
              :
                <div>You have nothing to do!</div>
          
          }
          </ul>
          <br></br>
          <span>ToDo: </span>
          <input value={toDo} onChange={changeTodo}></input>
          <button onClick={addTodo}>Add</button>
      </div>
    )
  }
  export default ToDo;
  