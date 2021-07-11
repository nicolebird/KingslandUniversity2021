//Write a function that calculates how much money you need to buy fruit.  You will receive a string for the type of fruit you want to buy, a number for weight in grams and another number for the price per kilogram.  

//Print the following text on the console:  `I need ${money} to buy ${weight} kilograms ${fruit}.`

//this code was submitted to the HW grader

function main(typeOfFruit, wt, costPerKilogram){
    let wtInKilograms = wt / 1000;
    let cash = wtInKilograms * costPerKilogram;

    console.log(`I need $${cash.toFixed(2)} to buy ${wtInKilograms.toFixed(2)} kilgrams ${typeOfFruit}.`);
}

main(`Orange`, 2500, 1.80);  //I need $4.50 to buy 2.50 kilograms orange.
main(`apple`, 1563,2.35);  //I need $3.67 to buy 1.56 kilograms apple.