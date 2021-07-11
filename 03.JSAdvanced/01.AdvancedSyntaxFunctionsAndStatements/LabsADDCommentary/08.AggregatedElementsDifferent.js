//Functions and Arrow Functions
function main(array){
    let sum = (function (array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    })(array);
    
    let inverseSum = (function (array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += 1 / array[i];
        }
        return sum;
    })(array);

    let concat = (function (array) {
        let result = '';
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    })(array);

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

main([1, 2, 3]);
//6
// 1.8333333333333333
// 123
main([2,4,8,16]);
// 30
// 0.9375
// 24816

//Write a program that performs different operations on an array of elements.  Implement the following operations:  *Sum(ai)-calculates the sum all elements from the input array *Sum (1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array *Concat(ai) - concatenates the string representations of all elements from the array

//The input comes as an array of number elements
//The output should be printed on the console on a new line for each of the operations. 

//Function signature:  function main(numArray)