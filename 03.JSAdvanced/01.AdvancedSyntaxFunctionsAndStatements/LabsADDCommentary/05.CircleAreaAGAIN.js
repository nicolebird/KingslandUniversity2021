function main(input) {
    let area = 0;
    let type = typeof(input);
    if(!isNaN(input)) {
    //NaN is an abbreviation for Not A Number
        area = input ** 2 * Math.PI;
        // ** means exponent
        console.log(area.toFixed(2));
    } else {
        console.log(`We cannot calculate the circle area, because we receive a ${type}.`); 
    }
}



main(5); //78.54
main(`name`); //We cannot calculate the circle area, because we receive a string


//Write a function that takes a single argument as an input.
//Check the type of the input arguement.  If it is a number, assume it is the radius of a circle and calculate the circle area.  Print the area rounded to two decimal places.
//If the argument type is NOT a number, print the following text on the console: `We cannot calculate the circle area, because we receive a {type of argument}.`
//The input comes as a single argument passed to your function.
//The output should be printed on the console.

//HINT:  1)Write a function that receives a single argument.  2)Declare a variable named result that will keep your result  3)Check the type of the input argument with typeof operator.  4)If the type is equal to `number`, calculate the circle area and print it on the console rounded to two decimal places.  To do this, use the toFixed().  The Math.pow() function returns the base to the exponent power, that is, base exponent:
// if(inputType === `number`){
    // result = Math.pow(input,2) * Math.PI;
    // console.log(result.toFixed(2));
// 5)If the type is NOT a `number`, print the following text on the console:
        // else{
    //     console.log(`We cannot calculate the circle area, because we receive a ${inputType}.`);
    // }
