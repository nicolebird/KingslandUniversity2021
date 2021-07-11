function main(n, p) {
	let result = 1;
	//2 ^ 5 => 2 * 2 * 2 * 2 * 2
	//power number of the time =>
	for (let i = 1; i <= p; i++) {
		// * 2
		//power of number of time =>5
		result = result * n;
	}
	console.log(result);
}

main(2, 5); // 2 ^ 5
//main(3, 4);
//main(2.5, 3);

//correct; turned in
