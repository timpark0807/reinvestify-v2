import React from 'react';
import './App.css';
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Calculator from '../calculator/calculator'

function App() {
  return (
    <div className="App">
      <Header/> 
      <Sidebar/>
      <Calculator/>
    </div>
  );
}

export default App;
