function CustomerButton() {

    const months = ["jan", "feb", "march", "april", "may", "june", 
    "july", "aug", "sept", "oct", "nov", "dec"]

        function custSearch(formData) {
          const query = formData.get("query");
          alert(`You searched for '${query}'`);
        }

    return(

        <>
        <label>
        Pick a starting month: 
        <select className="monthDrop">
            <option>jan</option>
            <option>feb</option>
            <option>march</option>
            <option>april</option>
            <option>may</option>
            <option>june</option>
            <option>july</option>
            <option>aug</option>
            <option>sept</option>
            <option>oct</option>
            <option>nov</option>
            <option>dec</option>
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