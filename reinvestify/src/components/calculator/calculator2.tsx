import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


function CalculatorV2() {
    const [globalVal, setGlobalVal] = useState(0); 
    const [localVal, setLocalVal] = useState(0);

    function equals(event: React.MouseEvent<HTMLButtonElement>) {
        setGlobalVal(globalVal+localVal)
        console.log(globalVal+localVal)
        setLocalVal(0)
    };

    function subtract(event: React.MouseEvent<HTMLButtonElement>) {
        setGlobalVal(globalVal - localVal) 
        setLocalVal(0)
    };

    function add(event: React.MouseEvent<HTMLButtonElement>) {
        setGlobalVal(globalVal + localVal) 
        setLocalVal(0)
    };

    function increment(value: number) {
        setLocalVal((localVal*10)+value) 
    }

    function clear(event: React.MouseEvent<HTMLButtonElement>){
        setLocalVal(0)
        setGlobalVal(0) 
    }

    return (
        <div>
            {localVal}

            <br></br>
            <button onClick={() => increment(1)}>1</button>
            <button onClick={() => increment(2)}>2</button>
            <button onClick={() => increment(3)}>3</button>

            <br></br>
            <button onClick={() => increment(4)}>4</button>
            <button onClick={() => increment(5)}>5</button>
            <button onClick={() => increment(6)}>6</button>
            <br></br>
            <button onClick={() => increment(6)}>6</button>

            <button onClick={subtract}>-</button>
            <button onClick={add}>+</button>

            <br></br>
            <button onClick={equals}>=</button>
            <button onClick={clear}>clear</button>
        </div>
    )
}

export default CalculatorV2 
