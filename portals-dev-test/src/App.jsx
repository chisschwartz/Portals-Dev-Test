import { useState } from 'react'
import React from 'react';
import './App.css'
import customerData from "./Components/CustomerData";
import CustomerTrans from './Components/CustomerTrans';
import Banner from './Components/Banner';
import CustomerButton from './Components/CustomerButton';
import CustomerDropdown from './Components/CustomerDropdown';
import CustomerFilter from './Components/CustomerFilter';
import Argh from './Components/Argh';

function App() {
  const [customers, setCustomers] = useState(customerData);

  // const displayCust = [... new Set(customerData.map((data) => data.name))];

  // const filterByCust = (currentCust) => {
  //   const displayCust = customerData.filter((newCustDisplay) => {
  //     return newCustDisplay.name === currentCust;

  //   });

  //   setCustomers(displayCust);
  // };



  return (
    <div>
    {/* <Banner /> */}
    <CustomerFilter/>
    {/* <CustomerButton
      filterByCust={filterByCust}
      setCustomers={setCustomers}
      displayCust={displayCust} /> */}
    {/* <CustomerTrans 
    customers={customers}
    />
    <CustomerDropdown /> */}
  </div>
  );
}

export default App
