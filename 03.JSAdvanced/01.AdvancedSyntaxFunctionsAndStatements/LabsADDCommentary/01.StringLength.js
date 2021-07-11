//Write a JS function that takes three string arguments as an input

//Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.

//The input comes as three string arguments passed to your function

//The output should be printed on the console on two lines.

//Input: `chocolate`,`ice cream`, `cake`  output: 22 7
//Input: `pasta`, `5`, `22.3`  output: 10 3

//First way
function main(array1,array2,array3){
    let sumLength;
    let averageLength;

    let firstArguementLength = array1.length;
    let secondArguementLength = array2.length;
    let thirdArguementLength = array3.length;

    sumLength = firstArguementLength + secondArguementLength + thirdArguementLength;
    averageLength = Math.floor(sumLength/3);

    console.log(sumLength);
    console.log(averageLength);
}

main(`chocolate`,`ice cream`, `cake`); // 22 7
main(`pasta`, `5`, `22.3`);  // 10 3

//Another way
function  main(stringOne,stringTwo,stringThree){
    let sumOfStrings = stringOne.length + stringTwo.length + stringThree.length;
    console.log(sumOfStrings);
    let averageLength = sumOfStrings / 3;
    console.log(Math.floor(averageLength));

}

main(`chocolate`,`ice cream`, `cake`); // 22 7
main(`pasta`, `5`, `22.3`);  // 10 3