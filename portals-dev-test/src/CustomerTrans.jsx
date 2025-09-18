import CustomerMath from "./CustomerMath";

const CustomerTrans = ({ transaction }) => {

    const months = ["Jan", "Feb", "March", "April", "May", "June", 
                    "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

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
                            <td>{data.march[0]}</td>
                            <td>{CustomerMath(data.march[0])}</td>
                        </>
                    </tr>
                ))};
            </tbody>
        </table>
    )
}

export default CustomerTrans;