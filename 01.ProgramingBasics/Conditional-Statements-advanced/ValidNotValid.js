function main(num) {
	let isValid = (num >= 100 && num <= 200) || num == 0;

	if (!isValid) {
		console.log("Not Valid");
	} else {
		console.log("Is valid");
	}
}

main(20);
