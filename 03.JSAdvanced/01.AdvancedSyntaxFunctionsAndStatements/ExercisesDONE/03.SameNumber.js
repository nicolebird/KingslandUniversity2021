//Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
//Print on the console true if all numbers are the same and false if not.  On the next line print the sum of all the digits.
//The input comes as an integer number.
//The output should be printed on the console.

function main (input) {

    let number = ('' + input) .split ('');
    let sum = 0;
    let check = true;
    
    for (let i = 1; i <number.length; i ++) {
        let firstNumber = Number(number[i]);
        let secondNumber = Number(number[i-1]); 
        if (firstNumber !== secondNumber){
            check = false;
        }
    
    }
    
    for (let i = 0; i <number.length; i++) {
        number[i] = Number(number[i]);
        sum += number[i];
    } 
    
    if (check === true){
        console.log (true);
    
    } else {
        console.log (false);
    }
    console.log (sum);
    
}

main(2222222); // true 14
main(1234);  //false 10

//Another way
function main(num) {
    let sum = 0;
    let result = true;
    let digit = num % 10;
    while (num !== 0) {
        let currentDigit = num % 10;
        sum += currentDigit;
        if (currentDigit !== digit) {
            result = false;
        }
        num = Math.floor(num / 10);
    }
    console.log(result);
    console.log(sum);
}

main(2222222); // true 14
main(1234);  //false 10

//A shorter code
function main(num) {
    let arr = num.toString().split('').map(Number);
    console.log([...new Set(arr)].length === 1);
    console.log(arr.reduce((a, b) => a + b));
}

main(2222222); // true 14
main(1234);  //false 10

//Another shorter code
function printIfAllDigitsTheSame(number) {
    let numArray = number.toString().split("").map(d => Number(d));
    let areAllDigitsTheSame = numArray.every(d => d === numArray[0]);
    let sum = numArray.reduce((a, b) => a + Number(b), numArray.shift());

    console.log(areAllDigitsTheSame);
    console.log(sum);
}

main(2222222); // true 14
main(1234);  //false 10