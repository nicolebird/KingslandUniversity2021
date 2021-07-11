//Receive a text and a remove word
//Remove all substrings that are equal to the remove word

//PDF way to do this problem
function main(word, currentText){
//Receive a text and a remove word
    let oldText;
    //declare oldText since it is not part of the main function
    while(oldText !== currentText){
    //while oldText is not equal to text
        oldText = currentText;
        //oldText is equal to text
        currentText = currentText.replace(word, ``);
        //text is equal to text.replace(word, ``)
    }
    console.log(currentText);
    //print the new text
}

main(`ice`, `kicegiciceeb`);
main(`abc`, `tabctqw`);
main(`key`, `keytextkey`);
main(`word`, `wordawordbwordc`);

//ANOTHER WAY
function main(removeText,inputString){

    while(inputString.indexOf(removeText)>= 0){
        inputString = inputString.replace(removeText, ``);
    }
    console.log(inputString);
}

main(`ice`, `kicegiciceeb`);
main(`abc`, `tabctqw`);
main(`key`, `keytextkey`);
main(`word`, `wordawordbwordc`);