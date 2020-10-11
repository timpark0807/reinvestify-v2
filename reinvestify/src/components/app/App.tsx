import React, {useState} from 'react';
import './App.css';
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import CalculatorV2 from '../calculator/calculator2'
import HTTPComponent from '../calculator/HTTPComponent'
import ToDo from '../calculator/todo'
import CurrencyConverter from '../calculator/currency'

import Spinner from 'react-bootstrap/Spinner'

const App = () => {

  const [showCalc, setShowCalc] = useState(false) 
  const [hello, setHello] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setHello(event.target.value)
  }

  return (
    <div>
      <CalculatorV2></CalculatorV2>

      <br></br>

      <ToDo/>

      <br></br>

      {/* <input value={hello} onChange={handleChange}></input> */}
      <HTTPComponent hello={hello} handleHelloChange={handleChange} name="tim"></HTTPComponent>
      <HTTPComponent hello={hello} handleHelloChange={handleChange} name="park"></HTTPComponent>
      <br/>
      <br/>

      <CurrencyConverter/>

    </div>
  )
}
export default App;
