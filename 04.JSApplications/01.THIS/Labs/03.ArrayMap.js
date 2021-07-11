//Will probably never use this stuff.  
function main(anArray, someFunction) {
    return anArray.reduce((accumulator, currentValue) => {
        accumulator.push(someFunction.call(anArray, currentValue));
        return accumulator;
    }, []);

}

let num = [1, 2, 3, 4, 5];
console.log(main(num, (item) => item * 2));

//--------Second way to do this
// function main(anArray, someFunction) {
//     let newArray = [];
//     for (let i = 0; i < anArray.length; i++) {
//         newArray.push(someFunction(anArray[i]));
//     }
//     return newArray;
// }

// let num = [1, 2, 3, 4, 5];
// console.log(main(num, (item) => item * 2));


//remember to change arrayMap to main for the HW grader
//Write a fx that takes in 2 parameters (array,fx) that uses .reduce() to implement a simple version of .map().
//INPUT: 2 parameters - an array and a fx
//OUTPUT: 