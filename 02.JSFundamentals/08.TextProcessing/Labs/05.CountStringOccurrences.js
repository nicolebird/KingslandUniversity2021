//Receive a text and a word that you need to search
//Find all occurrences of that word and print them

//included it with a for loop and a for-of loop for reference.  Turned it into the HW grader as a for-of loop

function main(sentence, word2Check) {
	let count = 0;
	let sentenceArray = sentence.split(" ");
	
	// for (let i = 0; i < sentenceArray.length; i++) {
	// 	let word = sentenceArray[i];
	// 	if(word == word2Check){
	// 		count ++;
	// 	}
		
	// }
	// console.log(count);
	for (let word of sentenceArray) {
		if (word == word2Check) {
			count++;
		}
	}
	console.log(count);
}

main("This is a word and it also is a sentence", "is");