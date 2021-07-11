
// conditional statements
//if-else-if
//switch case; possible but too long
//nested conditional

function main(month, hoursSpent, numOfPeople, timeOfDay) {
    let pricePerHour = 0;
    let totalCost = 0;
    if (month == "March" || month == "April" || month == "May") {
        if (timeOfDay == "day") {
            pricePerHour += 10.50;
        } else {
            pricePerHour += 8.40;
        }
    } else if (month == "June" || month == "July" || month == "August") {
        if (timeOfDay == "day") {
            pricePerHour += 12.60;
        } else {
            pricePerHour += 10.20;
        }
    }
    if (numOfPeople >= 4) {
        pricePerHour = pricePerHour - (pricePerHour * 0.10);
    }
    if (hoursSpent >= 5) {
        pricePerHour = pricePerHour - (pricePerHour * 0.50);
    }
    totalCost = numOfPeople * pricePerHour * hoursSpent;
    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalCost.toFixed(2)}`);
}

main("March", 3, 3, "day");
main("July", 5, 5, "day");

//price should be rounded to the second decimal place