//Write a program that calculates the difference between the sum of the even and the sum of odd numbers in an array.

//INPUT: [1,2,3,4,5,6]  OUTPUT: 3
//COMMENTS: 2+4+6=12, 1+3+5=9, 12-9=3
//INPUT: [3,5,7,9]  OUTPUT: -24
//INPUT: [2,4,6,8,10] OUTPUT: 30

//HINT: Parse each string to number
//Create two variables - for even and odd sum
//Iterate through all elements in the array with for-of loop and check if the number is odd or even
//Print the difference
function main(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = Number(inputArray[i]);
    }
    let evenSum = 0;
    let oddSum = 0;
    /* for(let i=0;inputArray.length;i++){
	    let num = inputArray[i]
        if (num % 2 == 0) {
			evenSum += num;
		} else {
			oddSum += num;
		}
	}*/
    for (let num of inputArray) {
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    let difference = evenSum - oddSum;
    console.log(difference);
}



main(["2", "4", "6", 8, 10]); //30
main([1,2,3,4,5,6]);  //OUTPUT: 3
//COMMENTS: 2+4+6=12, 1+3+5=9, 12-9=3
main([3,5,7,9]);  //OUTPUT: -24
main([2,4,6,8,10]); //OUTPUT: 30

//The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right). The return value of the function is stored in an accumulator (result/total). Note: reduce() does not execute the function for array elements without values.

