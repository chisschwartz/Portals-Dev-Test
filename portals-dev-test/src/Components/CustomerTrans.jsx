// import customerData from "./CustomerData";
// import CustomerMath from "./CustomerMath";
import React from "react";

//probably move logic over to button side and have this table filled out dynamically

const CustomerTrans = ({ customers }) => {

    let pointTotal = [];

    // for (let i = 0; i < customers.jan.length(); i++) {
    //     const p = CustomerMath(customers.jan[i]);
    //     pointTotal.push(<li key ={p.id}>{p}</li>)
    // }

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
               <td>{pointTotal}</td>
               <td><ul>
                {[ListOfTrans(data.jan), ListOfTrans(data.feb), ListOfTrans(data.march)]}
               </ul></td>
               </>
             </tr>
            ))};
             </tbody>
           </table>
          );
        };

        

                    
        //             //need to loop through data so that the transactions from each month are applied and caculated into the total
        //             //use state?

        //     <ul>
        //     {transaction.map((data) => (
        //             <li key={data.id}>
        //             {CustomerMath(data.jan[0]) + CustomerMath(data.jan[1]) + CustomerMath(data.jan[2]) + CustomerMath(data.jan[3]) + CustomerMath(data.jan[4])},
        //             {CustomerMath(data.feb[0])},
        //             {CustomerMath(data.march[0])},

        //             {/* somehow push this data into an array to be called upon in table */}

        //             <ul>{ListOfTrans(data.jan)}</ul>
        //             </li>


        //         ))}   
        //     </ul>

            
        // </table>

export default CustomerTrans;