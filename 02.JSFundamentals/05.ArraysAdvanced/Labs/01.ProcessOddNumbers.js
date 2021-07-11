//You are given an array of numbers.  Write a function that prints the elements at odd positions from the array, doubled and in reverse order.  
//INPUT: the input comes as array of number elements.
//OUTPUT: the output is printed on the console on a single line, separated by space.

//SHORT SWEET WORKOUT OF THE PROBLEMS
function main(arrayOfNumbers) {
    let result = arrayOfNumbers.filter((number, i) => i % 2 == 1).map(x => 2 * x).reverse();
    console.log(result.join(' '));
}

//PATRICK'S LAYOUT FOR THIS PROBLEM

function main(arrayOfNumbers) {
	let result = [];
    //This declares the result will be an array
	result = arrayOfNumbers.filter((num, index) => {
		//return index % 2 == 1;
		if (index % 2 == 1) {
			return true;
		} else {
			return false;
		}
	});
	result = result.map(function (num) {
		return num * 2;
	});
	result.reverse();

	console.log(result.join(" "));
}
main([3, 0, 10, 4, 7, 3]);  // 50 30
main([10, 15, 20, 25]);  // 6 8 0

