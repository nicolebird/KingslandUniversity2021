//Write a function that takes two positive numbers as input and compute the greatest common divisor.  The input comes as two positive integer numbers.  The output should be printed on the console.

//One way
function main(input1, input2) {
    GCD(input1, input2);
}
function GCD(input1, input2) {
    if ((typeof input1 !== 'number') || (typeof input2 !== 'number')) {
        return false;
    } else {
        input1 = Math.abs(input1);
        // .abs is absolute value:  abs() The Math. abs() function returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
        input2 = Math.abs(input2);
    }
    while (input2) {
        let compute = input2;
        input2 = input1 % input2;
        input1 = compute;
    }
    console.log(input1);
}

main(15,5);  //5
main(2154, 458);  //2

//Another Way
function printGCD(...numbers) {

    function calcGCD(numbers) {
        let firstNum = Number(numbers[0]);
        let secondNum = Number(numbers[1]);
        let temp = 0;

        while (secondNum) {
            temp = secondNum;
            secondNum = firstNum % secondNum;
            firstNum = temp;
        }

        return firstNum;
    }

    console.log(calcGCD(numbers));
}

main(15,5);  //5
main(2154, 458);  //2
