//First input: string
//Second input array/list of commands
// Decrypt until 'Finish' command

function main(messages, commands) {

    //remember to split the messages into characters
    let characters = messages.split('').map(letter => letter.trim());
    //console.log(characters);
    //tester console log shows the messages are split into characters.  Thanks Cagle!!
    let currentMessage = messages;

    for (let index in commands) {
        let command = commands[index];
        let commandParts = command.split(' ').filter(item => item.trim() != '');
        let optionalCode = commandParts[0];
        let dataList = commandParts.slice(1);

        if (optionalCode === 'Finish') {
            break;
        } else if (optionalCode === 'Replace' && dataList.length === 2) {
            let currentCharacter = dataList[0];
            let newCharacter = dataList[1];
            currentMessage = messages.split(currentCharacter).join(newCharacter);
            console.log(currentMessage);
        } else if (optionalCode === 'Cut' && dataList.length === 2) {
            let startIndex = Number(dataList[0]);
            let endIndex = Number(dataList[1]);

            if (startIndex >= 0 && startIndex < currentMessage.length &&
                endIndex >= 0 && endIndex < currentMessage.length) {
                currentMessage = currentMessage.slice(0, startIndex) + currentMessage.slice(endIndex + 1, currentMessage.length);
                console.log(currentMessage);
            } else {
                console.log('Invalid indexes!');
            }

        } else if (optionalCode == 'Make' && dataList.length == 1) {
            let upperLower = dataList[0];

            if (upperLower == 'Upper') {
                currentMessage = currentMessage.toUpperCase();
                console.log(currentMessage);
            } else if (upperLower == 'Lower') {
                currentMessage = currentMessage.toLowerCase();
                console.log(currentMessage);
            }
        } else if (optionalCode == 'Check' && dataList.length == 1) {
            let string = dataList[0];

            let subString = currentMessage.includes(string);
            if (subString == true) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }

        } else if (optionalCode == 'Sum' && dataList.length == 2) {
            let startIndex = dataList[0];
            let endIndex = dataList[1];
            let output = 0;
            if (startIndex >= 0 && startIndex < currentMessage.length &&
                endIndex >= 0 && endIndex < currentMessage.length) {
                let subString = currentMessage.substr(startIndex, endIndex);

                for (let i = 0; i < subString.length; i++) {
                    let value = subString.charCodeAt(i);
                    output += value;
                }
                console.log(Number(output));

            } else {
                console.log('Invalid indexes!');
            }


        }
    }
}
//main(`ILikeSharan`, [`Replace a e`, `Make Upper`, `Check SHEREN`, `Sum 1 4`, `Cut 1 4`, `Finish`]);
main('Nicholas',['Sum 1 3','Check kek','Finish']); // Expected Output: 308
                                                   // Message doesn't contain kek