import React from "react";
import { useState } from "react";
import CustomerMath from "./CustomerMath";
  
  function CustomerFilter() {
    const [filter, setFilter] = useState('');
    
    const custData = [
        { 
            id: 1,
            name: "Julius",
            username: "Jman",
            month: {
                jan: [49, 50, 120, 250, 300],
                feb:[51],
                march:[5000],
                april: [0],
                may:[0],
                june:[908],
                july: [0],
                aug:[90],
                sept:[89, 156, 2000],
                oct: [0],
                nov:[0],
                dec:[5590]
            }
        },
        {
            id: 2,
            name: "Sarah",
            username: "Sarahhhh",
            month: {
                jan: [49, 56, 130, 25, 75],
                feb:[51],
                march:[35],
                april: [56, 130, 5, 20],
                may:[60, 70],
                june:[280],
                july: [0],
                aug:[90],
                sept:[87, 890],
                oct: [49, 56],
                nov:[600],
                dec:[700]
            }
        },
    ];

    const filteredProducts = custData.filter((cust) =>
      cust.username.toLowerCase().includes(filter.toLowerCase())
    );

    const ListOfTrans = (custData) => {
        return custData.map((trans) => <li key={custData.index}>{trans}</li>)
    }

    const janMath = (custData) => {
        return custData.map((trans) => <li key={custData.id}>{CustomerMath(trans)}</li>)
    }
  
    return (
      <div className="filter">
        <h2>Please Enter Username:</h2>
        <input
          type="text"
          placeholder="Enter Username"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
            <table>
            <thead>
             <tr>
               <th>Name</th>
               <th>Username</th>
               <th>Monthly Transactions</th>
               <th>Total Points</th>
               <th></th>
             </tr>
             </thead>
             </table>
             <tbody>
             {filteredProducts.map((cust) => (
            <tr key={cust.id}>
            <td>{cust.name}</td>
            <td>{cust.username}</td>
            <td><ul>January: {ListOfTrans(cust.month.jan)}</ul> 
            <ul>February: {ListOfTrans(cust.month.feb)}</ul> 
            <ul> March: {ListOfTrans(cust.month.march)}</ul>
            <ul>April: {ListOfTrans(cust.month.april)}</ul>
            <ul>May: {ListOfTrans(cust.month.may)}</ul>
            <ul>June: {ListOfTrans(cust.month.june)}</ul> 
            <ul>July: {ListOfTrans(cust.month.july)}</ul> 
            <ul>August: {ListOfTrans(cust.month.aug)}</ul> 
            <ul>September: {ListOfTrans(cust.month.sept)}</ul> 
            <ul>October: {ListOfTrans(cust.month.oct)}</ul> 
            <ul>November: {ListOfTrans(cust.month.nov)}</ul> 
            <ul>December: {ListOfTrans(cust.month.dec)}</ul></td>
            <td>{janMath(cust.month.jan)}</td>
            </tr>
            ))}

             </tbody>
      </div>
    );
  }

 export default CustomerFilter;  