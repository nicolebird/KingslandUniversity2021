//Write a function that converts British pounds to dollars formatted to the 3rd decimal point.


function main(pound) {
    let dollar = pound * 1.31;
    //The dollar amount is equal to 1 pound multiplied by 1.31 because REMEMBER 1 British Pound is equal to 1.31 Dollars
    console.log(dollar.toFixed(3));
}
main(80); //104.800
main(39); //51.090

