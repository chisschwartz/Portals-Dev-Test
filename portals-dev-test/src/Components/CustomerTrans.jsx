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
                {transaction.map((data, id) => (
                    <tr key={id}> 
                        <>
                            <td>{data.name}</td>
                            <td>{data.jan[0]}</td>
                            <td>{CustomerMath(data.jan[0])}</td>
                            <td>{CustomerMath(data.jan[0])}</td>
                        </>
                    </tr>
                    //need to loop through data so that the transactions from each month are applied and caculated into the total
                ))};
            </tbody>
        </table>
    )
}

export default CustomerTrans;