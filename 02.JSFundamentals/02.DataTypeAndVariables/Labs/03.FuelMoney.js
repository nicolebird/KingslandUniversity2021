//Write a function which calculates how many money for fuel will be needed to drive a bus from one place to another.  Consider the following:

//Calculate the fuel by knowing that an empty bus can pass 100km with 7L diesel.
//One person in that bus excluding the driver increases fuel consumption by 100 milliliters.
//The money is calculated by multipying the fuel price with the needed fuel for the trip.

//As input you will receive 3 parameters (the distance the bus must travel, the passengers in it and the price for 1 liter of diesel)

//As output you should print this message: "Needed money for that trip is {neededMoney} lv"

function main(distance, numberOfPassengers, price) {

    let fuelNeeded = (distance / 100) * 7;
    fuelNeeded += numberOfPassengers * 0.1;
    let totalFuelCost = fuelNeeded * price;
    console.log(`Needed money for that trip is ${totalFuelCost}lv.`);
}
main(260, 9, 2.49); //Needed money for that trip is 47.559lv.
main(90, 14, 2.88); //Needed money for that trip is 22.176lv.

//typically because computers have issues with decimals it is good practice to use .toFixed() and add the numbers past the decimal you want to show in the solution.