function main(numbers) {
	const regex = /\+404([ -])[0-9]{3}(\1)[0-9]{4}\b/g;

	let validNumbers = [];
	let validNumber;
	while ((validNumber = regex.exec(numbers)) !== null) {
		validNumbers.push(validNumber[0]);
	}

	console.log(validNumbers.join(", "));
}

main('+404 222 2222,404-222-2222, +404/222/2222, +404-222 2222 +404 222-2222, +404-222-222, +404-222-22222 +404-222-2222');

//this is correct but get Patrick's version for reference

