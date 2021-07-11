function main(n1, n2, n3) {
	let negNum = 0;
	if (n1 > 0) {
		negNum++; //negativeNum = negativeNum + 1
	}
	if (n2 < 0) {
		negNum++;
	}
	if (n3 < 0) {
		negNum++;
	}

	if (n1 != 0 && n2 != 0 && n3 != 0) {
		if (negNum % 2 === 0) {
			//even
			console.log("Negative");
		} else {
			console.log("Positive");
		}
	} else {
		console.log("Zero");
	}
}

main(2 * 3 * -1);
main(-3 * -4 * 5);

//REMINDER
// odd amount of neg #'s then the result/product is going to be neg
// -1 * 1 * -1
// even amount of neg #'s then the result/product is going to be positive
// -1 * -1
