//Recieve a string and a single word
//Find all of the occurences of that work in the text and replace them with the corresponding amountof "*"

function main(sentence, censoredWord) {
	while (sentence.includes(censoredWord)) {
		//inputString.indexOf(removeText) > -1
		sentence = sentence.replace(
			censoredWord,
			"*".repeat(censoredWord.length)
		);
	}

	console.log(sentence);
}
main(
	"A small sentence with some small words, solving a small problem",
	"small"
);
