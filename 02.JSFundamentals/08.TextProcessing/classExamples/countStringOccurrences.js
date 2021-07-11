//Receive a text and a word that you need to search
//Find all occurrences of that word and print them

// function main(sentence, word){
//     let words = sentence.split(` `);
//     let counter = 0;

//     for(let w of words){
//         if (w === word){
//             counter++;
//         }
//     }
//     console.log(counter);
// }

// main("This is a word and it is also a sentence", "is");

//Another way; best way
function main(sentence, findWord) {
	let count = 0;
	let sentenceArray = sentence.split(" ");
	for (let word of sentenceArray) {
		if (word == findWord) {
			count++;
		}
	}
	console.log(count);
}

main("This is a word and it also is a sentence", "is");


