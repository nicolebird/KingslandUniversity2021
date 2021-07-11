function main(drink, sugar, numberOfDrinks) {

    let drinkPrice = 0;
    for (let i = 1; i <= numberOfDrinks; i++) {
        //Use a for loop to collect all of the if-else-if into a container
        if (drink == "Espresso") {
          //this is the first drink; 
            if (sugar == "Without") {
                drinkPrice += 0.90;
            } else if (sugar == "Normal") {
                drinkPrice += 1.00;
            } else if (sugar == "Extra") {
                drinkPrice += 1.20;
            }
            //all of this pertains to only the first drink
        } else if (drink == "Cappuccino") {
            //this is the second drink; linked to the first if
            if (sugar == "Without") {
                drinkPrice += 1.00;
            } else if (sugar == "Normal") {
                drinkPrice += 1.20;
            } else if (sugar == "Extra") {
                drinkPrice += 1.60;
            }
            //this all pertains to the second drink
        } else if (drink == "Tea") {
            //this is the third drink type; linked to the first if
            if (sugar == "Without") {
                drinkPrice += 0.50;
            } else if (sugar == "Normal") {
                drinkPrice += 0.60;
            } else if (sugar == "Extra") {
                drinkPrice += 0.70;
            }
            //this all pertains to the third drink
        }
    }

    if (sugar == "Without") {
        drinkPrice = drinkPrice - (drinkPrice * 0.35);
    }
    //this changes the price if there is no sugar because it has a 35% discount

    if ((numberOfDrinks >= 5) && (drink == "Espresso")) {
        drinkPrice = drinkPrice - (drinkPrice * 0.25);
    }
    //When "Espresso" is selected if at least 5 drinks have already been purchased, there is a 25% discount
    let finalPrice = 0;
    if (drinkPrice > 15.00) {
        finalPrice = drinkPrice - drinkPrice * 0.20;
        //When the amount exceeds $15, 20% discount is applied to the final price
    } else {
        finalPrice = drinkPrice;
        //Otherwise the drink price is the final price
    }
    console.log(`You bought ${numberOfDrinks} cups of ${drink} for ${finalPrice.toFixed(2)} dollars.`);
}

main("Espresso", "Without", 10);
main("Cappuccino", "Normal", 13);
main("Tea", "Extra", 3);




/**
 * machine.
Without sugar Normal Extra sugar
Espresso $0.90 $1 $1.20
Cappuccino $1.00 $1.20 $1.60
Tea $0.50 $0.60 $0.70
Keep in mind the following discounts:
• When selecting a drink without sugar, there is a 35% discount.
• When "Espresso" is selected if at least 5 drinks have already been purchased, there is a 25%
discount.
• When the amount exceeds $15, 20% discount from the final price.
The discounts are applied in the order of their description.
One string:
"You bought {count drinks} cups of {drink} for {total price} dollars."
The price must be formatted to the second digit after the decimal point.
 */