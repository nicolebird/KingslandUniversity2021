//You are given an array of numbers
//Print the odd numbers, doubled and reversed
function main(arrayOfNums) {
	//get the odd numbers

	let odds = arrayOfNums.filter((x) => x % 2 == 1);
	//double them.
	let doubled = odds.map((x) => x * 2);
	//reverse them.
	let reversed = doubled.reverse();
	//console.log(doubled == reversed);
	console.log(reversed.join(" "));

	// console.log(
	// 	arrayOfNums
	// 		.filter((x) => x % 2 == 1)
	// 		.map((x) => 2 * x)
	// 		.reverse()
	// 		.join(" ")
	// );
}


main([10,15,20,25]); //50 30
main([3,0,10,4,7,3]); // 6 14 6
