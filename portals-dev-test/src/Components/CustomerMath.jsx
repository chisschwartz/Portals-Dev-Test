function CustomerMath(amountSpent) {
    var bonusPoints = 0;
    var points = 0;
    var totalPoints = 0;

    //maybe instead of passing through points we pass through i from loop?
    //or loop inside our math function?

    if (amountSpent > 100){

        bonusPoints = amountSpent - 100;
        points = (bonusPoints * 2) + 50;
        totalPoints += points;
    }
    
    if (amountSpent >= 50 && amountSpent <= 100) {

        points = (amountSpent -  50);
        totalPoints += points
    } 

    if(amountSpent < 50) {

        points = 0;
    }

    return points;
}

export default CustomerMath;