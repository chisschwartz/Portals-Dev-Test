import { useState } from 'react'
import './App.css'
import CustomerData from "./CustomerData";
import CustomerTrans from './CustomerTrans';

function App() {
  const [transaction, setTransaction] = useState(CustomerData)

  return (
    <>
    <CustomerTrans transaction={transaction}/>
  
    </>
  )
}

export default App
