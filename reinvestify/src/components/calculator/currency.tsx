import React, {useState} from 'react';

const CurrencyConverter = () => {

    const [currency1, setCurrency1] = useState('USD') 
    const [currency2, setCurrency2] = useState('')

    const [amount1, setAmount1] = useState('')
    const [amount2, setAmount2] = useState('')


    const handleCurrencyChange1 = (event: any) => {
        setCurrency1(event.target.value)
    }
    const handleCurrencyChange2 = (event: any) => {
        setCurrency2(event.target.value)
    }
    const handleAmountChange1 = (event: any) => {
        setAmount1(event.target.value)
    }
    const handleAmountChange2 = (event: any) => {
        setAmount2(event.target.value)
    }

    const convert = async (event: any) => {
        const response = await fetch("https://api.exchangeratesapi.io/latest?base="+currency1)
        const json = await response.json()
        console.log(json.response.currency2)
        setAmount2("10")
    }

  return (

    <div>

        <Currency 
            currency={currency1} 
            amount={amount1} 
            handleCurrencyChange={handleCurrencyChange1} 
            handleAmountChange={handleAmountChange1}
        />

        <br/>

        <Currency 
            currency={currency2} 
            amount={amount2} 
            handleCurrencyChange={handleCurrencyChange2} 
            handleAmountChange={handleAmountChange2}
        />

        <br/>
        <button onClick={convert}>Convert</button>

    </div>

  )
}

const Currency = (props: any) => {
    return (
        <div>
        <select value={props.currency} onChange={props.handleCurrencyChange}>
            <option value="USD">U.S Dollar</option>
            <option value="JPY">Yen</option>
            <option value="EUR">Euro</option>
        </select>
        <input value={props.amount} onChange={props.handleAmountChange}></input>
        </div>
    )
}
export default CurrencyConverter;




