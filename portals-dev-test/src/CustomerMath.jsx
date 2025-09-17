function CustomerMath(amountSpent) {
    // amountSpent = 0;
    bonusPoints = 0;
    points = 0;

    if (amountSpent < 50) {
        points += 0;

    } else if (amountSpent >= 50 <= 100) {
        if(amountSpent == 50) {
            points += 1;
        }

        points += (amountSpent -  50);

    } else {
        bonusPoints = amountSpent - 100;
        points += bonusPoints * 2;
    }

    return points;
}

export default CustomerMath;