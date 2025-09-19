// import CustomerData from "./CustomerData";
// import CustomerMath from "./CustomerMath";

function CustomerButton() {

    //math should be called upon in the button when we set params and submit

    const months = ["jan", "feb", "march", "april", "may", "june", 
    "july", "aug", "sept", "oct", "nov", "dec"]

        function custSearch(formData) {
          const query = formData.get("query");
          alert(`You searched for '${query}'`);
        }

        // function custSearch2({id}) {
        //     async function custSearch2(CustomerData) {
        //         "api call"
        //         const custId = CustomerData.get('id')
        //         await CustomerMath(custId);
        //     }
        // }

        // for(i = start; i < start + 2; i++) {

        // }

    return(

        //give each month in drop down there own id num to pass through loops?
        <>
        <label>
        Pick a starting month: 
        <select className="monthDrop">
            <option id="1" value={0}>{months[0]}</option>
            <option>{months[1]}</option>
            <option>{months[2]}</option>
            <option>{months[3]}</option>
            <option>{months[4]}</option>
            <option>{months[5]}</option>
            <option>{months[6]}</option>
            <option>{months[7]}</option>
            <option>{months[8]}</option>
            <option>{months[9]}</option>
            <option>{months[10]}</option>
            <option>{months[11]}</option>
        </select>
        </label>

        <form action={custSearch}>
            <label>
            Input customer id: 
                <input name="query" />
                <button name="custButton" type="submit">Search</button>
            </label>
        </form>
        </>

    )
}

export default CustomerButton;