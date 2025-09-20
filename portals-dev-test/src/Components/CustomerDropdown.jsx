import { useState } from "react"

function CustomerDropdown() {

    
    const [selectedValue, setSelectedValue] = useState("")

    const handleDrop = (event) => {
        setSelectedValue(event.target.value)
    }

    //math should be called upon in the button when we set params and submit

    const months = ["jan", "feb", "march", "april", "may", "june", 
    "july", "aug", "sept", "oct", "nov", "dec"]


    return (
          
          <div>
        <label>
        Pick a starting month: 
        <select className="monthDrop" value={selectedValue} onChange={handleDrop}>
            <option value="">Choose a starting month</option>
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
        <p>Selected Value: 
        {selectedValue.length === 0 ? "Please select a month" : selectedValue} 
        </p>
        </label>
        </div> 
        
    );
}

export default CustomerDropdown;