function main(numberOfMessages, messages) {
    //use regex101 to confirm this code is valid
    let validationRegex = /^!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[a-zA-Z]{7,})\]/gm;
    for (let messageIndex = 0; messageIndex < numberOfMessages; messageIndex++) {
        let message = messages[messageIndex];  
        let isMatch = validationRegex.exec(message);
        if (isMatch === null) {
            console.log("The message is invalid");
            continue; 
        }
        let groups = isMatch.groups;
        //lets encrypt data per PDF
        let asciiMessageArray = [];
        for (let characterIndex in groups.message) {
            asciiMessageArray.push(groups.message.charCodeAt(characterIndex));
        }
        let decodeText = `${groups.command}: ${asciiMessageArray.join(' ')}`;
        console.log(decodeText);
    }
}
main(2,[`!Send!:[IvanisHere]`,`*Time@:[Itis5amAlready]`]);

//Create a program, that checks if it's inputs have a valid command and a valid message and then encrypts it.
//You will receive the number -n- of messages.  You must check if each message is valid
//A message is valid when: *The command is surrounded by `!`, starts with an Uppercase letter, and then is followed by only lowercase letters.  **The command needs to be a minimum of 3 characters long.  **There is a colon after the command  ** There is a message consisting of alphabetical letters between [`and`].  **It needs to be a minimum of 8 characters long.

//Example for a valid message:  "!Send!:[IvanisHere]" 
//You need to check if the message is valid.  **If it is valid - encrypt it  ** If it isn't valid - print the following message:  "The message is invalid"

//Encrypting a message means to take all letters from the message and turn them into ASCII numbers.  After successful encrypt, print it in the following format:  {command}: {number1} {number2} {number3} (...)

//Note: Encrypt only the text in the messafe.  If you have "[Ivan us here]", the part that you need to encrypt is "Ivan is Here".

//INPUT: You receive a line - input that you have to check if it has a valid message
//OUTPUT: Print the result in format described above