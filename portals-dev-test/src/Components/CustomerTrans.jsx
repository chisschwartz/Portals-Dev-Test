import CustomerMath from "./CustomerMath";

//probably move logic over to button side and have this table filled out dynamically

const CustomerTrans = ({ transaction }) => {

    return(
        <table>
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Transaction Amount</th>
                    <th>Points Earned</th>
                    <th>Total Points</th>
                </tr>
            </thead>
            <tbody>
                {transaction.map((data) => (
                    <tr key={data.id}> 
                        <>
                            <td>{data.name}</td>
                            <td>{data.jan[4]}</td>
                            <td>{CustomerMath(data.jan[4])}</td>
                            <td>{CustomerMath(data.jan[4])}</td>
                        </>
                    </tr>

                    
                    //need to loop through data so that the transactions from each month are applied and caculated into the total
                ))};
            </tbody>

            <ul>
            {transaction.map((data) => (
                    <li key={data.id}>
                    {CustomerMath(data.jan[0]) + CustomerMath(data.jan[1]) + CustomerMath(data.jan[2]) + CustomerMath(data.jan[3]) + CustomerMath(data.jan[4])},
                    {CustomerMath(data.feb[0])},
                    {CustomerMath(data.march[0])},

                    {/* somehow push this data into an array to be called upon in table */}

                    </li>


                ))};   
            </ul>

            
        </table>
    )
}

export default CustomerTrans;