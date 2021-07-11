//You will receive 3 parameter (string, char, string).

//First string will be a word with a missing char replaced with a underscore `_`
//You have to replace the character with the missing part (underscore) from the first string and compare the result with the second string.

//If they are equals you should print "Matched", otherwise print "Not Matched".

function main(missingChar, inputChar, solutionString){
    let fixedWord = missingChar.replace(`_`, inputChar);

    if(fixedWord == solutionString){
        console.log("Matched");
    } else{
        console.log("Not Matched");
    }

}

main('Str_ng', `I`, `Strong`);
main(`Str_ng`, `i`, `String`);