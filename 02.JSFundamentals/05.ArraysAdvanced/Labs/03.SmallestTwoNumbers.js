//Write a function that prints the two smallest elements from an array of numbers.  
//The INPUT: an array of number elements
//  [30,15,50,5] // 5 15
//[3,0,10,4,7,3]  //0 3 
//The OUTPUT: printed on the console on a single line, separated by space

//FIRST WAY WORKED OUT IN STUDY GROUP WITH GREGG
function main(arrayOfNumbers) {
    let sortedArray = arrayOfNumbers.sort((numberOne, numberTwo) => numberOne - numberTwo);
    //Basic Array Sorting By default, the JavaScript Array.sort function converts each element in the array that needs to be sorted into a string, and compares them in Unicode code point order. const foo = [9, 1, 4, 'zebroid', 'afterdeck']; foo.sort(); const bar = [5, 18, 32, new Set, { user: 'Eleanor Roosevelt' }]; bar.sort();
    let smallest2 = sortedArray.slice(0,2);
    //Slice() The JavaScript Slice function is one of the JavaScript String function, which is used to extract the part of a string and return in new string. Slice() function will accept two arguments, first integer value is the index position where the slicing will start and the second integer value is the index position where the slicing will end.
    console.log(smallest2.join(' '));
    //this console log prints the results joined as a string
}
main([30, 15, 50, 5]); //5 15


//FIRST WAT PATRICK DID THIS IN CLASS
function main(arrayOfNums) {
	let sortedArray = arrayOfNums.sort((num1, num2) => num1 - num2);
	let smallest2 = sortedArray.slice(0, 2);

	console.log(smallest2.join(" "));
}

main([30, 15, 5, 50]);

//SECOND SOLUTION DONE BY PATRICK

let smallest2 = [];
let min = Infinity;
let index = -1;
for (let i = 0; i < arrayOfNums.length; i++) {
	if (arrayOfNums[i] < min) {
		min = arrayOfNums[i];
		index = i;
	}
}

smallest2.push(min);
arrayOfNums.splice(index, 1);

min = Infinity;

for (let i = 0; i < arrayOfNums.length; i++) {
	if (arrayOfNums[i] < min) {
		min = arrayOfNums[i];
	}
}
smallest2.push(min);