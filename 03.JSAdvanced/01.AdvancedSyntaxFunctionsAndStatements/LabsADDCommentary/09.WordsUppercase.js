//Shorter version with same output
function main(uppercaseText) {
    let output = uppercaseText.toUpperCase().match(/\w+/g).join(', ');
    
    console.log(output);
}

main(`Hi, how are you?`); //HI, HOW, ARE, YOU


//Another way to do this, more actual regex
function main(upperCasedText){

    let regEx = /[^,!?\s.]+/g;

    let output = upperCasedText
    .match(regEx)
    .map(item => item.toUpperCase())
    .join(', ');

    console.log(output);

}

main(`Hi, how are you?`); //HI, HOW, ARE, YOU

// Write a program that extracts all words from a passed in string and converts them to upper case . The extracted words in the upper case must be printed on a single line separated by "," .

// The input comes as a single string argument - the text to extract and convert words from.

// The output should be a single line containing the converted string.


//Input:  'Hi, how are you?'  Output: HI, HOW, ARE, YOU

// Hints
// You may need to use a Regular Expression or alternatively check for all delimiters that can be found in a sentence (ex. ",", "", "!", "?" And so on).



