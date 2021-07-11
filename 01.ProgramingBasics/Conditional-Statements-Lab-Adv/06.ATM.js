//function main(balance, withdrawal, limit) {
//	if (balance >= withdrawal && limit > withdrawal) {
//		console.log("The withdrawl was successful.");
//	} else if (withdrawal > limit) {
//		console.log("The limit was exceeded.");
//	} else if (withdrawal > balance) {
//		console.log("Insufficient availability");
//	}
//}

function main(balance, withdraw, limit) {
	if (withdraw > balance) {
		console.log("Insufficient availability.");
	} else if (withdraw > limit) {
		console.log("The limit was exceeded.");
	} else if (balance >= withdraw && limit < withdraw) {
		console.log("The withdraw was successful");
	}
}

//main(140, 20, 25);
main(10, 50, 20);
//positive to negative makes coding life more complex.  Instead go negative to positive
