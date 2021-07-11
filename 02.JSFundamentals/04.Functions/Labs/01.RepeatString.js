//Write a function that receives a string and a repeat count n.  The function should return a new string (the old one repeated n times).

//input: abc 3  OR  String 2
//output: String 2  OR StringString


//EASY WAY
// function main(string, number) {

//     let newString = '';
//     newString = string.repeat(number);
//     console.log(newString);
// }
// main('abc', 3);

//CLASS WAY ->PATRICK WANTS US TO USE THIS TO GET USED TO THE FUNCTION FUNCTION WAY OF THINGS
function repeatString(inputString, numOfrepeat) {
	let output = inputString.repeat(numOfrepeat);

	return output;
}

function main(string, num) {
	console.log(repeatString(string, num));
}

main("abc", 3);