//CHECK PATRICK'S CODE AND FIX THIS

//Write a program which receives two string arrays and print on the console whether they are identical or NOT.  

//Arrays are identical if their elements are equal.  If the arrays are identical find the sum of the first one and print on the console following message:  `Arrays are identical.  Sum: {sum}`

//If the arrays are NOT identical find the first index where the arrays differ and print on the console following message:
//`Arrays are not identical.  Found difference at {index} index.`

function main(array1, array2) {
	let isEqual = true;
	let sum = 0;
	for (let i = 0; i < array1.length; i++) {
		sum += Number(array1[i]);
		if (array1[i] != array2[i]) {
			//print the false message
			console.log(
				`Arrays are not identical. Found difference at ${i} index`
			);
			isEqual = false;
			break;
		}
	}
	if (isEqual) {
		//print the true message
		console.log(`Arrays are identical. Sum: ${sum}`);
	}
}
main(["10", "20", "30"], ["10", "20", "30"]);  //Arrays are identical.  Sum: 60
main([`1`,`2`,`3`,`4`,`5`],[`1`,`2`,`3`,`4`,`5`]); //Arrays are not identical.  Found difference at 2 index
main([`1`], [`10`]);  //Arrays are not identical.  Found difference at 0 index.