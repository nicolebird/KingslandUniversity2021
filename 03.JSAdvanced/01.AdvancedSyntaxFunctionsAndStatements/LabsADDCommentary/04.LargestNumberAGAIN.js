//Another way
function main(number1, number2, number3){
    let numbers = [number1, number2, number3];
    numbers.sort((a, b) => b - a);
    console.log(`The largest number is ${numbers[0]}.`);
}


main(5,-3,16); //The largest number is 16.
main(-3,-5,-22.5);  //The largest number is -3.

//Another way
function main(...numberArray){
    numberArray.sort((a, b) => a - b);
    console.log(`The largest number is ${numberArray[2]}`);
}

main(5,-3,16); //The largest number is 16.
main(-3,-5,-22.5);  //The largest number is -3.

//Write a function that takes three number arguments as an input and find the largest of them.  Print the following text on the console: `The largest number is {number}.`
//The input comes as three number arguments (n1,n2,n3) passed to your function
//The output should be printed to the console.  

//HINTS: 1)Write a function that receives three number arguments  2)Declare a variable named result that will keep the result.  3)Make several checks to find out the largest of the three numbers.  Start with number1.  4)Do the same for the others  5)Print the result on the console,