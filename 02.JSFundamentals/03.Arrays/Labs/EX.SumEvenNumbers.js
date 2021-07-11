//Write a program which receives an array of strings , parse them to numbers and sum only the even numbers.

//array of strings
//parse into numbers
//sum only even numbers

function main(number) {
    let numList = number.map((num) => {
    //The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. ... Note: this method does not change the original array
        return Number(num);
    });
    let evenList = numList.filter((evenNum) => {
    //The filter() method creates an array filled with all array elements that pass a test (provided as a function). Note: filter() does not execute the function for array elements without values. Note: filter() does not change the original array.
        if (evenNum % 2 === 0) {
            return evenNum;
        }
    });
    let sum = evenList.reduce((a, b) => a + b, 0);
    //The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right). The return value of the function is stored in an accumulator (result/total). Note: reduce() does not execute the function for array elements without values
    console.log(sum);
}
main([`1`,`2`,`3`,`4`,`5`,`6`]);  // 12
main([`3`,`5`,`7`,`9`]);  //0
main([`2`,`4`,`6`,`8`,`10`]);  //30
