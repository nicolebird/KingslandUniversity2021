function main(typeOfFlower, numOfFlowers, budget) {
	let finalPrice = 0;
	let moneyLeft = 0;
	let moneyNeeded = 0;
	//let discountPrice = 0;
	//switch will be typeOfFlower to compare/case each flower/declare finalPrice/if numOfFlowers > 80/finalPrice should equal finalPrice * percent for that flower
	switch (typeOfFlower) {
		case "Roses":
			finalPrice = 5;
			if (numOfFlowers > 80) {
				finalPrice = finalPrice * 0.9; //x * x -1 = x * (1 - .1) = x * .9
				//total cost after discount will = original cost - original cost *.1 (tc = originalCost - originalcost  *.1)
				//price *= 0.9;
				//discountPrice=finalPrice*0.10;
				//finalPrice=finalPrice-discountPrice
			}
			break;
		case "Dahlias":
			finalPrice = 3.8;
			if (numOfFlowers > 90) {
				finalPrice = finalPrice * 0.85;
			}
			break;
		case "Tulip":
			finalPrice = 2.8;
			if (numOfFlowers > 80) {
				finalPrice = finalPrice * 0.85;
			}
			break;
		case "Narcissus":
			finalPrice = 3;
			if (numOfFlowers < 120) {
				finalPrice = finalPrice * 1.15;
			}
			break;
		case "Gladioulus":
			finalPrice = 2.5;
			if (numOfFlowers < 80) {
				finalPrice = finalPrice * 1.2;
			}
			break;
	}
	//create variable for moneyNeeded & moneyLeft
	moneyNeeded = finalPrice * numOfFlowers - budget;
	moneyLeft = budget - finalPrice * numOfFlowers;
	//if finalPrice * numOfFlowers < budget then print Hey, you have...
	if (finalPrice * numOfFlowers < budget) {
		console.log(
			`Hey, you have a great garden with ${numOfFlowers} ${typeOfFlower} and ${moneyLeft.toFixed(
				2
			)} leva left.`
		);
	} else {
		// print Not Enough with .toFixed
		console.log(
			`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
		);
	}
}
main("Tulip", 88, 260);
// main("Roses", 55, 250);
// main("Narcissus", 119, 360);