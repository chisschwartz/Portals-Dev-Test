function CustomerMath(amountSpent) {
    var bonusPoints = 0;
    var points = 0;

    if (amountSpent > 100){

        bonusPoints = amountSpent - 100;
        points = (bonusPoints * 2) + 50;
    }
    
    if (amountSpent >= 50 && amountSpent <= 100) {

        points = (amountSpent -  50);
    } 

    if(amountSpent < 50) {

        points = 0;
    }

    return points;
}

export default CustomerMath;