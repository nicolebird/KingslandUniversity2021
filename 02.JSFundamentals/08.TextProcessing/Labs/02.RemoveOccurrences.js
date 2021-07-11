//Receive a text and a remove word
//Remove all substrings that are equal to the remove word

//PDF way to do this problem
function main(subString, inputString){
    //Receive a text and a remove word
        let oldText;
        //declare oldText since it is not part of the main function
        while(inputString.includes(subString)){
        //think of does it include this
            inputString = inputString.replace(subString, ``);
            //text is equal to text.replace(word, ``)
        }
        console.log(inputString);
        //print the new text
    }
    
    main(`ice`, `kicegiciceeb`);
    main(`abc`, `tabctqw`);
    main(`key`, `keytextkey`);
    main(`word`, `wordawordbwordc`);
    
    //ANOTHER WAY
    function main(subString,inputString){
    
        while(inputString.indexOf(subString)>= 0){
            inputString = inputString.replace(subString, ``);
        }
        console.log(inputString);
    }
    
    main(`ice`, `kicegiciceeb`);
    main(`abc`, `tabctqw`);
    main(`key`, `keytextkey`);
    main(`word`, `wordawordbwordc`);