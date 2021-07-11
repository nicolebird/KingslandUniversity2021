function main(n, array) {
	let min = Infinity;
	let max = -Infinity;
	//infinity leaves open for any number
	for (let i = 0; i < n; i++) {
		//this is used in all loops
		let currentNum = array.shift();
		//this defines array.shift()
		if (currentNum < min) {
			//if current number is less than the minimum
			min = currentNum;
		}

		if (currentNum > max) {
			//otherwise current number is = to max
			max = currentNum;
		}
	}
	console.log(`Min number : ${min}`);
	console.log(`Max number: ${max}`);
}

main(3, [10, 350, 50]);

//in the main [] is encasing the array

//correct code
// used the 2 if case statements so it could be extended on without coding issues later.
