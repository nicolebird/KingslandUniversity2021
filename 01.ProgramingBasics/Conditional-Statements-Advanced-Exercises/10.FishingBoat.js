function main(budget, season, fisherMen) {
	season = season.toLowerCase();
	let seasonName = ["summer", "autumn", "winter", "spring"]; //arrays hold multiple values and must be accessed by their index
	let rent = [4200, 4200, 2600, 3000]; //array index always start with zero!
	let total = 0;
	//console.log(rent[1]) How to access array
	//console.log(rent.indexOf("winter")); How to access indexOf
	//additional discount of 5% if the group is an even number, except fall
	let fisherMenEven = fisherMen % 2;
	if (season === "summer") {
		total = rent[seasonName.indexOf(season)];
	} else if (season === "autumn") {
		total = rent[seasonName.indexOf(season)];
	} else if (season === "winter") {
		total = rent[seasonName.indexOf(season)];
	} else if (season === "spring") {
		total = rent[seasonName.indexOf(season)];
	}
	if (fisherMen <= 6) {
		total *= 0.9; // total cost after discount will = original cost - original cost *.1 (tc = originalCost - originalcost  *.1) x * x -1 = x * (1 - .1) = x * .9 => equal 10% discount of tc.
	} else if (fisherMen > 6 && fisherMen < 12) {
		total *= 0.85; // total = total * .85
	} else if (fisherMen > 11) {
		total *= 0.75;
	}
	if (fisherMenEven == 0 && season !== "autumn") {
		total *= 0.95;
	} else if (season === "summer") {
		total = total;
	}
	//create variables for moneyLeft and moneyNeeded
	if (total < budget) {
		let moneyLeft = budget - total;
		console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
	} else if (total > budget) {
		let moneyNeeded = total - budget;
		console.log(
			`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`
		);
	}
}

// main(3000, "Summer");
// main(3600, "Autumn", 6);
main(2000, "Winter", 13);

