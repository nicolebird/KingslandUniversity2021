function main(numberOfPoints) {
	// numberOfPoints + bonusPoints + totalNumberOfPoints;
	let bonusPoints = 0;

	if (numberOfPoints <= 100) {
		bonusPoints = 5;
		// if the # is <= 100, bonus points are 5
	} else if (numberOfPoints > 100 <= 1000) {
		bonusPoints = numberOfPoints * 0.2;
		//if the # is > 100 <= 1000 the bonus points are 20% of the #
	} else if (numberOfPoints > 1000) {
		bonusPoints = numberOfPoints * 0.1;
		//if the # is > 1000 then the bonus points are 10% of the #
	}
	if (numberOfPoints % 2 === 0) {
		bonusPoints = bonusPoints + 1;
		//for an even number _ + 1p
	} else if (numberOfPoints % 5 === 0) {
		bonusPoints = bonusPoints + 2;
		//for a number ending in 5 + 2p
	}
	console.log(bonusPoints);

	console.log(numberOfPoints + bonusPoints);
}

// //main is the input nuumbers provided
// //main(20);
main(175);
// main(2703);
// //main(15875);

// //output #'s
// // 6, 26
// // 37, 212
// // 270.3, 2973.3
// // 1589.5, 17464.5
