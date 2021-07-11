//Write a JS function that takes two numbers (number1, number2) and a string (operator) as an input it.
//Switch case this problem
function main(number1,number2,operator){

    let result;

    switch (operator) {
        case `+`:
            result =  number1 + number2;
            break;
        case `-`:
            result = number1 - number2;
            break;
        case `/`:
            result = number1 / number2;
            break;
        case `*`:
            result = number1 * number2;
            break;
        case `%`:
            result = number1 % number2;
            break;
        case `**`:
            result = number1 ** number2;
            break;
    }
    console.log(result);
    //Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
}

main(5,6,`+`);  //11
main(3,5.5,`*`);  //16.5

//Write a JS function that takes two numbers and a string as an input it.  

//The string may be one of the following: `+`,`-`,`*`,`/`,`%`,`**`

//Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.

//The input comes as two numbers and a string arguement passed to you function.
//The output should be printed on the console.

//INPUT: 5,6,`+`   OUTPUT: 11
//INPUT: 3,5.5,`*`  OUTPUT: 16.5

//HINT:  1)Write a function which receieves three arguements (number1,number2,operator)  2)Declare a variable named result that will keep your mathematical result.   3) Write down switch command that will take the string from your input and depending on it, perform the mathematical logic between the two numbers.  4) Print the result on the console.