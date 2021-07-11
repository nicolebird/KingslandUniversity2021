function main(letterCount, charArray) {
	let sum = 0;

	for (let i = 0; i < letterCount; i++) {
		let letter = charArray.shift();

		switch (letter) {
			case "a":
				sum++; //sum = sum + 1;
				break;
			case "e":
				sum += 2; // sum = sum + 2;
				break;
			case "i":
				sum += 3;
				break;
			case "o":
				sum += 4;
				break;
			case "u":
				sum += 5;
				break;
			//no need for a default case because there isn't anything else needed
		}
	}
	console.log(sum);
}

//could use if - else - if
//if(letter == "a"){
//	sum++;
//} else if(letter == "e"){
// 	sum += 2;
// }

// this if - else - if continues to cover all cases.

main(3, ["i", "x", "u"]);

//without the brackets in the main the code is incorrect
//no brackets doesn't make the "array"
