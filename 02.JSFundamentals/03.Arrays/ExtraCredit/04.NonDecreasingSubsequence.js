function solve(array) {
    console.log(array.filter((num, index) => num >= Math.max(...array.slice(0, index))).join(' '));
}

main([1, 3, 8, 4, 10, 12, 3, 2, 24]); //1 3 8 10 12 24
main([1, 2, 3, 4]); // 1 2 3 4
main([20, 3, 2, 15, 6, 1]); // 20


//Another way to do this
function main(array) {
    let max = array[0];
    let result = array.filter(num => {
        if (num >= max) {
            max = num;
        }
        return num >= max;
    });
    console.log(result.join(' '));
}
//if any number is less than the current biggest one - ignore number
//if numbers is >= current biggest number, set it as biggest one and continue to next number
//The output is the processed array after the filtration, which should be a non-decreasing subsequence. The elements should be printed on one line, separated by a single space.
//HINT: The Array.filter() built-in function might help you a lot with this problem.
main([1, 3, 8, 4, 10, 12, 3, 2, 24]); //1 3 8 10 12 24
main([1, 2, 3, 4]); // 1 2 3 4
main([20, 3, 2, 15, 6, 1]); // 20

//Another way
function main(arrayOfNumbers) {
	let nonDescendingArray = [];
	let largestNumber = 0;
	// extract the elements from the nums array to the outNums Array
	// where the number that is less than the current largest number
	// is ignored.
	for (i = 0; i < arrayOfNumbers.length; i++) {
		if (arrayOfNumbers[i] > largestNumber) {
			largestNumber = arrayOfNumbers[i];
			nonDescendingArray.push(largestNumber);
		}
	}
	console.log(nonDescendingArray.join(" ").trim());
}

main([1, 3, 8, 4, 10, 12, 3, 2, 24]); //1 3 8 10 12 24
main([1, 2, 3, 4]); // 1 2 3 4
main([20, 3, 2, 15, 6, 1]); // 20

//Write a function that extracts only those numbers that form a non-decreasing subsequence.  In other words, you start from the first element and continue to the end of the given array of numbers.  Any number which is LESS THAN the current bigger one is ignored, alternatively if it's equal or higher than the current biggest one you set it as the current biggest one and you can continue to the next number.

//INPUT: The input comes as array of numbers
// input: [1,3,8,4,10,12,3,2,24]  output: 1 3 8 10 12 24
//input: [1,2,3,4] output: 1 2 3 4
//input: [20,3,2,15,6,1]  output: 20

//OUTPUT: The output is the processed array after the filtration, which should be a non-decreasing subsequence.  The elements should be printed on one line, separated by a single space.  

