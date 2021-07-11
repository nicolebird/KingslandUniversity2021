function main(...args) {
	//array is ...
	let isEven = true;
	for (let arg in args) {
		console.log(arg, isEven);
		if (args[arg] < 0) isEven = !isEven;
	}
	console.log("isEven", isEven);
}

main(2 * 3 * -1);
