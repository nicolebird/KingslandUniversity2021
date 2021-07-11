//You are given two integers n and k.  Write a function that generates and prints the following sequence: 
// * The first element is 1
// * Every following element equals the sum of the previous k element.
// * The length of the sequence is n elements.

//The input comes as two number arguements.  The first element represents the number n, and the second - the number k.

//INPUT: 6, 3  OUTPUT: 1 1 2 4 7 13
//INPUT: 8, 2  OUTPUT: 1 1 2 3 5 8 13 21

//HINT: The 2nd element (1) is the sum of the 3 elements before it, but there is only 1, so we take that.  The third element is the sum of the first 2(1 and 1) and the 4th - the sum of 1, 1 and 2.  The 5th element is the sum of the 2nd, 3rd, and 4th (1,2 and 4) and so on,

function main(numberOfElements, lookBackNum) {
	let sequence = [1];

	for (let i = 1; i < numberOfElements; i++) {
		let start = Math.max(0, i - lookBackNum);
        //max() The Math. max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.Feb 19, 2021

		let sum = 0;
		for (let j = start; j < sequence.length; j++) {
			sum += sequence[j];
		}
		sequence.push(sum);
		//sequence => [1,1,2,4]
	}
	console.log(sequence.join(" "));
}
main(6, 3); // 1 1 2 4 7 13
main(8, 2); //1 1 2 3 5 8 13 21