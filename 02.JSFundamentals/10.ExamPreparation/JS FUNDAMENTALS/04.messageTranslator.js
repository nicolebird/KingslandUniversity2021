// checks if inputs have valid command AND message
// encrypt message
// first input: 

function main(numberOfMessages, messages) {
    let validationRegex = /^!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[a-zA-Z]{7,})\]/gm;
    for (let messageIndex = 0; messageIndex < numberOfMessages; messageIndex++) {
        let message = messages[messageIndex];
        //separating command from message and validate   
        let isMatch = validationRegex.exec(message);
        if (isMatch === null) {
            console.log("The message is invalid");
            continue; //Continues with the next item we are iterating
        }
        let groups = isMatch.groups;
        //encrypt data
        let asciiMessageArray = [];
        for (let charIndex in groups.message) {
            asciiMessageArray.push(groups.message.charCodeAt(charIndex));
        }
        let decodeText = `${groups.command}: ${asciiMessageArray.join(' ')}`;
        console.log(decodeText);
    }
}
main(2,[`!Send!:[IvanisHere]`,`*Time@:[Itis5amAlready]`]);