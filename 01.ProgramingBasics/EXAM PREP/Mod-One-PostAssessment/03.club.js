//calculates the profit of the club for the evening and if desired profit is reached
//price of the cocktail is the length of its name
//if the price of an order is an odd number, there is a 25% discount on the order price.

//Inputs
/**
 * 2 parameters
 * -the desired profit of the club (1.00 - 15,000)
 * -An array of strings and numbers containing a pattern of the following
 * --name of the cocktail or command "Party!" - string
 * --number of cocktails for the order - a whole number (1-50)
 */

function main(desiredProfit, cocktailsAndAmount) {
	let cocktailName;
	let clubProfit = 0;

	while (cocktailsAndAmount !== undefined) {
		//let numOfCocktails = Number(cocktailOrCommandAndNumOfCocktails.shift());
		cocktailName = cocktailsAndAmount.shift();

		if (cocktailName != "Party!" && clubProfit < desiredProfit) {
			let numberOfCocktails = Number(cocktailsAndAmount.shift());
			let cocktailPrice = cocktailName.length;
			let totalTab = numberOfCocktails * cocktailPrice;

			if (totalTab % 2 != 0) {
				//this is if the number is odd
				totalTab -= totalTab * 0.25;
				//totalTab = totalTab - (totalTab * 0.25)
				//0.25 -> 25%
			}
      clubProfit += totalTab;
	  //clubProfit = clubProfit + totalTab
		
    } else if (cocktailName == "Party!" && clubProfit < desiredProfit) {
			let moneyNeeded = (desiredProfit - clubProfit).toFixed(2);
			console.log(`We need ${moneyNeeded} dollars more.`);
			console.log(`Club income - ${clubProfit.toFixed(2)} dollars.`);
			break;
			//if this statement is true then it breaks here and ends the code
		
    } else if (clubProfit >= desiredProfit) {
			console.log(`Target acquired.`);
			console.log(`Club income - ${clubProfit.toFixed(2)} dollars.`);
			break;
			//if this statement is true then it breaks here and ends the code
		}
	}
}


//main(500, ["Bellini", 6, "Bamboo", 7, "Party!"]);
main(100, ["Sidecar", 7, "Mojito", 5, "White Russian", 10]);