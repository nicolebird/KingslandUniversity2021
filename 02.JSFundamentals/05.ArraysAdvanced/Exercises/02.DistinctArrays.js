//You will be given an array of integer numbers on the first line of the input (space-separated).
//Remove all repeating elements from the array
//Print the result elements separated by single space

//Input: [1, 2, 3, 4]  //Output: 1 2 3 4 //Comments: No repeating elements
//Input: [7, 8, 9, 2, 2, 3, 4, 1, 2]  //Output: 7 8 9 2 3 4 1   //Comments: 7 and 2 are already present in the array => remove them
//Input: [20, 8, 12, 13, 4, 4, 8, 5]  //Output: 20 8 12 13 4 5  // Comments: 4 and 8 are already present in the array -> remove them

function main(arrayOfIntegerNumbers) {

    console.log(Array.from(new Set(arrayOfIntegerNumbers)).join(" "));
    //.from() Creates an array from an iterable object.
}
main([1, 2, 3, 4]);
//Output: 1 2 3 4 //Comments: No repeating elements
main([7, 8, 9, 2, 2, 3, 4, 1, 2]);
//Output: 7 8 9 2 3 4 1   //Comments: 7 and 2 are already present in the array => remove them
main([20, 8, 12, 13, 4, 4, 8, 5]);
 //Output: 20 8 12 13 4 5  // Comments: 4 and 8 are already present in the array -> remove them
 