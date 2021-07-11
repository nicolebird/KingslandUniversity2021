//Receive a string a start index and count
//Print the substring of the received string

function main(inputString, startIndex, count){
    let subString = inputString.substr(startIndex,count);
    console.log(subString);
}

main(`ASentence`, 1, 8); //Sentence
main(`JavaScript`, 4,6); // Script
