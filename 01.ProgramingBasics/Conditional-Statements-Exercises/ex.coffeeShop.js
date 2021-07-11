//calculate the price for a drink
//coffee(1.00) or tea(0.60)
//extra: sugar(0.40) or no

function main(drinkName, extra){
    let price = 0.00;
    //declaring price in the beginning covers the full set of conditional statements
    if(drinkName == "coffee"){
        price += 1.00; // same as price = price + 1.00
    } else if(drinkName == "tea"){
        price += 0.60; //price = price + 0.60;

    }
    //this conditional statement deals with what the drink is

    if (extra == "sugar"){
        price += 0.40;  //price = price + 0.40;
    }
    //this conditional statement is IF there is anything added to the drink
    console.log(`Final price: $${price.toFixed(2)}`);
    //console.log above is temperate literal
    //console.log("Final price: $" + price.toFixed(2));
    //console.log above is string
    
    //this console log brings together the results of the whole problem
}

main("coffee", "sugar");
main("tea", "no");

//remember the placement of the let statement is dependant on whether it is for the whole statement set or specific ones.