//Calculate and print the sum of the first and the last elements in an array.
//The input comes as array of string elements holding the numbers
//The output is the return value of your function

function main(inputArrayOfStrings){
    inputArrayOfStrings = inputArrayOfStrings.map(Number);
    //The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. ... Note: this method does not change the original array.
    console.log(inputArrayOfStrings[0] + inputArrayOfStrings.pop());
    // The pop() method removes the last element from an array and returns that element. This method changes the length of the array
}

main([`5`,`10`]); //15
main([`20`,`30`,`40`]); //60


//SHORTER WAY TO DO THIS.  THIS WAS HOW PATRICK DID THIS.
function main(inputArrayOfStrings) {
	console.log(Number(inputArrayOfStrings.shift()) + Number(inputArrayOfStrings.pop()));
}

main([`5`,`10`]); //15
main(["20", "30", "40"]); //60