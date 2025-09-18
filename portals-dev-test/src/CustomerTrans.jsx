import CustomerMath from "./CustomerMath";

const CustomerTrans = ({ transaction }) => {

    return(
        <table>
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Transactions</th>
                    <th>Points Earned</th>
                </tr>
            </thead>
            <tbody>
                {transaction.map((data, id) => (
                    <tr key={id}>
                        <>
                            <td>{data.name}</td>
                            <td>{data.transactions[0]}</td>
                            <td>{CustomerMath(120)}</td>
                        </>
                    </tr>
                ))};
            </tbody>
        </table>
    )
}

export default CustomerTrans;