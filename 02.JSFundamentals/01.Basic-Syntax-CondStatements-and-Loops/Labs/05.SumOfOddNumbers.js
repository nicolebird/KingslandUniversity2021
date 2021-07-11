//Write a program that prints the next n off numbers (starting from 1) and on the last row prints the sum of them.

//INPUT: You will receive a number - n.  This number shows how many odd numbers you should print.

//OUTPUT: Print the next n odd numbers, starting from 1, separated by new lines.  On the last line, print the sum of these numbers.

//CONSTRAINTS: n will be in the interval [1...100]


function main(numberOfOddNumbers) {
	let sum = 0;
	let oddNumber = 1;
	//instead of let oddNumber = 1; Then change the for loop to the one I commented out.
	for (let i = 1; i <= numberOfOddNumbers; i++) {
		//(let i = 1; i <= numberOfOddNumbers * 2; i += 2){
		console.log(`${oddNumber}`);
		sum += oddNumber;
		oddNumber += 2;
	}

	console.log(`Sum: ${sum}`);
}

main(5); // 1, 3, 5, 7, 9, Sum: 25
main(3); // 1, 3, 5, Sum: 9





