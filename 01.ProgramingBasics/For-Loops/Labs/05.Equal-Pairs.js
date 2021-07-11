function main(numberOfPairs, listOfPairs) {
	let lastSum;
	let maxDifference = -Infinity;
	let equalPairs = true;
	//assuming all of the pairs are equal
	for (let i = 0; i < numberOfPairs; i++) {
		let sum = 0;
		let item1 = listOfPairs.shift();
		let item2 = listOfPairs.shift();
		sum = item1 + item2;
		if (lastSum != undefined && lastSum != sum) {
			equalPairs = false;
			//current pair is not equal;
			//calculate the difference
			let diffOfSums = Math.abs(lastSum - sum);
			if (diffOfSums > maxDifference) {
				maxDifference = diffOfSums;
			}
		}
		lastSum = sum;
		//out of the for-loop lets it persist
	}

	if (equalPairs) {
		//items were equal
		//print yes
		//print the sum
		console.log(`Yes, value=${lastSum}`);
	} else {
		//print no
		//print the max difference
		console.log(`No, maxDiff=${maxDifference}`);
	}
}
//main(2, [-1, 0, 0, -1]);
main(2, [5, 6, 3, 7]);
