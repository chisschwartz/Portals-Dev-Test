import { useState } from 'react'
import './App.css'
import CustomerData from "./Components/CustomerData";
import CustomerTrans from './Components/CustomerTrans';
import Banner from './Components/Banner';
import CustomerButton from './Components/CustomerButton';

function App() {
  const [transaction, setTransaction] = useState(CustomerData)

  return (
    <>
    <Banner />
    <CustomerButton />
    <CustomerTrans transaction={transaction}/>
  
    </>
  )
}

export default App
