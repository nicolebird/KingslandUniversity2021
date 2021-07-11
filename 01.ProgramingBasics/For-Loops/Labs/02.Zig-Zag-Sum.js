function main(numItem, numsarray) {
	let sum = 0;
	for (let i = 1; i <= numItem; i++) {
		let currentNumber = numsarray.shift();
		if (i % 2 == 0) {
			// even
			sum -= currentNumber;
		} else {
			//odd   i % 2 == 1
			sum += currentNumber;
		}
	}
	console.log(sum);
}

//main(2, [10, -20]);
main(3, [10, 20, 5]);

//output
//30
//-5

// add 10 - (-20) == + 20 ==> 30

//remember 10 - (-20) is = to 10 + 20 ... the double negative cancels the negative out
