//You will receive 3 integer numbers.
//Write a function sum() to get the syn if the first two integers and subtract() function that subtracts the third integer from the result.

//input: 23,6,10  OR 1,17,30  OR  42,58,100
//output:  19  OR  -12  OR  0


let result = function(n1, n2, n3){
    let sum = n1 + n2;
    return sum - n3;
};

function main(num1, num2, num3){
    console.log(result(num1, num2, num3));
}

main(23,6,10); //19
main(1,17,30); //-12
main(42,58,100); //0


//Another way to do this
// function main(numberOne, numberTwo, numberThree) {
//     function addAndSubtract(numberOne, numberTwo, numberThree) {
//         let result = 0;
    
//         function sum(numberOne, numberTwo) {
//             result = numberOne + numberTwo;
//             return result;
//         }
//         sum(numberOne, numberTwo);
    
//         function subtract(numberThree) {
//             result = result - numberThree;
//             return result;
//         }
//         subtract(numberThree);
    
//     console.log(result);
//     }
//     addAndSubtract(numberOne, numberTwo, numberThree);
// }

// main(23,6,10); //19
// main(1,17,30); //-12
// main(42,58,100); //0