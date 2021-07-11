//Write a JS function that rounds numbers to a specific precision.  

//The input comes as two numbers.  The first value is the number to be rounded and the second is the precision (significant decimal laces).  
//If a precision is passed, that is more than 15 it should automatically be reduced to 15.  

//Remove trailing zeroes, if any (you can use parseFloat())

//parseFloat() Definition and Usage
// The parseFloat() function parses a string and returns a floating point number. This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.

//The output should be printed to the console.  Do not print insignificant decimals.  

function roundingNumbers(number, decimal){
    if(decimal > 15){
    //if decimal is greater than 15
        decimal = 15;
        //automatically reduce it to 15
    }
    console.log(parseFloat(number.toFixed(decimal)));
    //parseFloat(number.toFixed(decimal)) removes the trailing zeroes and toFixed fixes it to the thing in the parenthsis.  In this case its fixed to the decimals.
}

roundingNumbers(10.5, 3); //output 10.5
roundingNumbers(3.1415926535897932384626433832795, 2); //output 3.14

