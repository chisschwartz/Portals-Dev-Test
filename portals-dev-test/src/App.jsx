import { useState } from 'react'
import './App.css'
import CustomerData from "./Components/CustomerData";
import CustomerTrans from './Components/CustomerTrans';
import Banner from './Components/Banner';

function App() {
  const [transaction, setTransaction] = useState(CustomerData)

  return (
    <>
    <Banner />
    <CustomerTrans transaction={transaction}/>
  
    </>
  )
}

export default App
