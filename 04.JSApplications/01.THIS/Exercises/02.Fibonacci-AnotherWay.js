//Write a JS fx that when called, returns the next Fibonacci number, starting @ 0, 1.  Use a closer to keep the current number.  With this there will be no input for the main or the return.  (Weirdness huh?)  The output MUST BE a Fibonacci number and must be RETURNED from the fx.  (With hw grader change getFibonator to main to get it to pass.  I know it's dumb but whatever.)
function main(){
    let firstNum = 0;
    let secondNum = 1;
    let result = 0;
        //this declares all variables to be used in the return fx and gives them  a starting number. 

    return function fib(){
        result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;
        return num1;
    };
      //this return fx w/in the original fx gives the results which lead to the final return.
}

//this declares that fib and getFibonator are one in the same fx and therefore console logs the whole damn fx/problem.

let fib = main();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

//What the heck is Fibonacci??  Definition: A fibonacci sequence is written as: 0, 1, 1, 2, 3, 5, 8, 13, 21, ... The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.