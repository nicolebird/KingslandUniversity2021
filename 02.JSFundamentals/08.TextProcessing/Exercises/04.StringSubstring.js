//Actual PDF for the exercise
//The input will be given as two separate strings

//Write a function that checks given text for containing a given word.  The comparison should be case sensitive.
//Once you find match, print the word and stop the program.

//If you don't find the word print "{word} not found!"


//create the function that creates two strings
function main(firstString, secondString){

    if(secondString.toLowerCase().includes(firstString.toLowerCase())){
    //case sensitive, hence the .toLowerCase()
    //Once you find the match, print the word and stop the program
        console.log(firstString);
    }else{
        //If you don't find the word print "{word} not found!"
        console.log(`${firstString} not found!`);
    }
}

main(`javascript`,`JavaScript is the best programming language`);

//Check this class example against the exercise PDF

//Receive a string a start index and count
//Print the substring of the received string

// function main(inputString, startIndex, count){
//     let subString = inputString.substr(startIndex,count);
//     console.log(subString);
// }

// main(`ASentence`, 1, 8); //Sentence
// main(`JavaScript`, 4,6); // Script
