// You will be given an array - strings of wagons
// FIRST ELEMENT will be a string containing wagons (numbers).  Each number inside the string represents the number of passengers that are currently in the
// SECOND ELEMENT - max capacity of each wagon (single number)
// remaining elements will be commands:
// Add {passengrs} means add a wagon to the end with the given number of passengers
// {passengers} means find an existing wagon to fit all the passengers (starting from the from the first wagon). 
// At the end print the final state of the train - (all the wagons separated by a space)

function main(stringOfWagons) {

    let newWagon = stringOfWagons.shift().split(' ').map(Number); 
    //shifts passengerArray to newWagonArray, turns into new array and converts to number
    let maxCapacity = stringOfWagons.shift();
    let add = false;
    let passengers = 0;
    let passengerArray = stringOfWagons.toString().split(' ').toString().split(",");
    for (let i = 0; i < passengerArray.length; i++) {
    //this handles the first index [i]
        if (add == true) {
            newWagon.push(Number(passengerArray[i]));
        }
        if ((passengerArray[i] != "Add") && (add == false)) { 
        //if item comes in as a number, update newWagonArray by adding passengers.
            passengers = Number(passengerArray[i]);
            for (let j = 0; j < newWagon.length; j++) {
            //this handles the second index [j]
                if ((passengers + newWagon[j]) <= maxCapacity) {
                    let total = passengers + newWagon[j];
                    newWagon.splice(j, 1, total);
                    //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
                    break;
                }
            }
        }
        add = false;
        if (passengerArray[i] == "Add") {
            add = true;
        }
    }
    console.log(newWagon.join(" "));
}
main(["32 54 21 12 4 0 23", "75", 'Add 10', "Add 0", "30", "10", "75"]);
//Output: 72 54 21 12 4 75 23 10 0
main([`0 0 0 10 2 4` , `10` , `Add 10` ,`10` ,`10` ,`8` ,`6` ]);
//Output: 10 10 10 10 10 10 10
