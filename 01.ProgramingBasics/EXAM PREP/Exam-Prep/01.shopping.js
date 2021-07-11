// 5 minutes buying a frappe
// 3 * 2 = 6 minutes buying computer hardware
// 2 * 2 = 4 minutes buying software

//use the calculation instead of the sum for the problems given.


//     let minutesForFrap = 5;
//     let computerHardwareTime = 6;
//     let softwareTime = 4;
//     let totalRestTime = 20;

function main(restTime, pricePerHardware, pricePerSoftware, frappePrice) {
    let computerHardwareTime  = 3 * 2;
    let softwareTime = 2 * 2;
    let timeSpent = 5 + computerHardwareTime  + softwareTime;
    let remainingTime = restTime - timeSpent;
    let moneySpent = (pricePerHardware * 3) + (pricePerSoftware * 2) + frappePrice;
    console.log(moneySpent.toFixed(2));
    console.log(remainingTime);
}
main(20, 2, 4, 3);

    

    //Total spent money during break - formatted to 2 decimal places
    //The remaining time for break
   




// 10.20 - 10.20*.1
//totalPrice = totalPrice - totalPrice*.1
// totalPrice = totalPrice * .9
//totalPrice *= .9

//10 % of discount is = to paying 90% of the totalPrice (0.9)
//15% of discount is = to paying 85% of the totalPrice (0.85)
//20% pf discount is = to paying 80% of the totalPrice (0.8)
