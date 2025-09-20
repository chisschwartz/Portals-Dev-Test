

function CustomerMath(amountSpent) {
    var bonusPoints = 0;
    var points = 0;
    var totalPoints = 0;
    var monthlyPoints = [];

    //store each point total from each loop and call them in table to display for each month

    const months = ["jan", "feb", "march", "april", "may", "june", 
    "july", "aug", "sept", "oct", "nov", "dec"]

    //maybe instead of passing through points we pass through i from loop?
    //or loop inside our math function?
    //maybe months should also be here?

    //key value pair month and point?

    if (amountSpent > 100){

        bonusPoints = amountSpent - 100;
        points = (bonusPoints * 2) + 50;
        // totalPoints += points;
    }
    
    if (amountSpent >= 50 && amountSpent <= 100) {

        points = (amountSpent -  50);
        // totalPoints += points
    } 

    if(amountSpent < 50) {

        points = 0;
    }

    return points;

    function customerTotal(monthlyPoints) {

        totalPoints = monthlyPoints[0] + monthlyPoints[1] + monthlyPoints[2];

        return totalPoints;
    }
}

export default CustomerMath;