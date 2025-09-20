// import customerData from "./CustomerData";
import React from "react";
import CustomerMath from "./CustomerMath";

//probably move logic over to button side and have this table filled out dynamically

const CustomerTrans = ({ customers }) => {

    let points = [];
    for (let i=0; i < custData.jan; i++) {
        points.push(CustomerMath(custData.jan[i]));
    }

    const ListOfTrans = (customer) => {
        return customer.map((trans) => <li key={customer.index}>{trans}</li>)
    }

    

    return(
            <table>
            <thead>
             <tr>
               <th>Name</th>
               <th>Transactions</th>
               <th>Points Earned</th>
               <th>Total Points</th>
             </tr>
             </thead>
             <tbody>
             {customers.map((data, id) => (
             <tr key = {id}>
              <>
               <td>{data.name}</td>
               <td><ul>
                {[ListOfTrans(data.month.jan), ListOfTrans(data.month.feb), ListOfTrans(data.month.march)]}
               </ul></td>
               </>
             </tr>
            ))};
             </tbody>
           </table>
          );
        };

export default CustomerTrans;