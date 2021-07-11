//product weekday  weekend
// Bananas 2.50       2.70
// Apples  1.30       1.60
//Kiwis    2.20       3.00
function main(product, timeOfweek) {
	let price = 0;
	if (product == "bananas") {
		if (timeOfweek == "weekday") {
			price = 2.5;
		} else {
			price = 2.7;
		}
	} else if (product == "apples") {
		if (timeOfweek == "weekday") {
			price = 1.3;
		} else {
			price = 1.6;
		}
	} else if (product == "kiwi") {
		if (timeOfweek == "weekday") {
			price = 2.2;
		} else {
			price = 3.0;
		}
	}
	console.log("$" + price.toFixed(2));
}

main("bananas", "weekend");
