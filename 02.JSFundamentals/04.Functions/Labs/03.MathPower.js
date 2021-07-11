//Write a function that calculates and returns the value of a number raised to a given power

//input:  2  8  OR  3 4
//output: 256   OR  81

//Class example as well

//Create a function that calculates the value of a number
//The number should be raised to a given power
//Return it's value

//BASIC/OLD WAY TO SOLVE
// function solve(number, power){
//     let baseValue = 1;
//     //loop exponent times
//     for(let i = 0; i < power; i++){
//         //multiply the base value
//         baseValue = baseValue * number;
//     }
//     return baseValue;
// }

// solve(2,8); // 256
// solve(3,4); // 81

//PATRICK EXAMPLE
function main(base, powOf) {
	let output = powerOf(base, powOf);
	console.log(output);
}

function powerOf(number, power) {
	return Math.pow(number, power);
	// return num** pow;
	//for loop here;
}

main(3, 4); //81


