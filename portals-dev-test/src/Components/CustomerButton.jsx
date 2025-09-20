import customerData from "./CustomerData";
import React from "react";

function CustomerButton(filterByCust, setCustomers, displayCust) {

        // function custSearch(formData) {
        //   const query = formData.get("query");
        //   alert(`You searched for '${query}'`);
        // }

        const click = () => {
            setCustomers(customerData);
        }

    return(

        <div>
            {displayCust.map((customers , id) => {
                return(
                    <button onClick={() => filterByCust(customers)} key={id}>
                        {customers}
                    </button>
                );
            })}
            <button onClick={click}>All Customers</button>
            </div>

    )
}

export default CustomerButton;