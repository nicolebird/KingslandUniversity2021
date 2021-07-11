//Calculates the amount of money Peter needs to buy everything. 
//Price of whiskey is in USD
//Price of rakia is half the price of whiskey
//Price of wine is 40% less than the price of rakia
//Price of beer is 80% less than the price of rakia

function main(priceOfWhiskeyPerL, amountOfBeer, amountOfWine, amountOfRakia, amountOfWhiskey) {

    let priceOfRakiaPerLiter = priceOfWhiskeyPerL / 2;
    let priceOfWinePerLiter = priceOfRakiaPerLiter - (priceOfRakiaPerLiter * 0.40);
    let priceOfBeerPerLiter = priceOfRakiaPerLiter - (priceOfRakiaPerLiter * 0.80);
    let whiskeyPrice = priceOfWhiskeyPerL * amountOfWhiskey;
    let beerPrice = priceOfBeerPerLiter * amountOfBeer;
    let winePrice = priceOfWinePerLiter * amountOfWine;
    let rakiaPrice = priceOfRakiaPerLiter * amountOfRakia;
    let amountNeeded = beerPrice + winePrice + rakiaPrice + whiskeyPrice;

    console.log(amountNeeded.toFixed(2));
}
main(50, 10, 3.5, 6.5, 1);