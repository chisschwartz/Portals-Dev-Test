import { useState } from 'react'
import React from 'react';
import './App.css'
import customerData from "./Components/CustomerData";
import CustomerTrans from './Components/CustomerTrans';
import Banner from './Components/Banner';
import CustomerDropdown from './Components/CustomerDropdown';
import CustomerFilter from './Components/CustomerFilter';

function App() {
  const [customers, setCustomers] = useState(customerData);



  return (
    <div>
    <Banner />
    {/* <CustomerFilter/> */}
    <CustomerTrans 
    customers={customers}
    />
    {/* <CustomerDropdown /> */}
  </div>
  );
}

export default App
