//Syntax, Functions and Statements
function main(numArray) {

    let sum = numArray.reduce((a, b) => a + b, 0);
    let inverseSum = numArray.reduce((a, b) => a + 1/b, 0);
    let concatenated = numArray.reduce((a, b) => a + b.toString(), '');

    console.log(sum);
    console.log(inverseSum.toFixed(4));
    console.log(concatenated);
}

main([1, 2, 3]);
main([2, 4, 8, 16]);



//Another Syntax, Functions and Statements
function main(numArray) {

    function aggregateElements(array) {
        let sum = (a, b) => a + b;
        let inverseSum = (a, b) => a + 1 / b;
        let stringConcat = (a, b) => a.concat(b);

        let operationsArray = [[sum, 0], [inverseSum, 0], [stringConcat, ""]];

        return operationsArray.map(x => array.reduce(...x));
    }


    console.log(aggregateElements(numArray).join("\n"));
}

main([1, 2, 3]);  // 6 1.8333  123
main([2,4,8,16]); // 30  0.9375  24816

//Write a program that performs different operations on an array of elements.  Implement the following operations:  *Sum(ai)-calculates the sum all elements from the input array *Sum (1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array *Concat(ai) - concatenates the string representations of all elements from the array

//The input comes as an array of number elements
//The output should be printed on the console on a new line for each of the operations. 

//Function signature:  function main(numArray)