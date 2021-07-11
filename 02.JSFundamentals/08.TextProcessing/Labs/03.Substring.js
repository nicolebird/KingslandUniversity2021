//compare to the PDF for the lab.  This is Pat's class example

//Receive a string a start index and count
//Print the substring of the received string

function main(inputString, startIndex, count){
    let output = inputString.substr(startIndex,count);
    console.log(output);
}

main(`ASentence`, 1, 8); //Sentence
main(`JavaScript`, 4,6); // Script


