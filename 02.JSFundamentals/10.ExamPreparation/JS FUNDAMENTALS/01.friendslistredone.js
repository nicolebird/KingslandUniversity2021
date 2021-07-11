function main(userNames, commands) {
    let currentFriendsList = userNames.split(',').map(name=>name.trim());
    let blacklistedNamesCount = 0;
    let lostNamesCount = 0;


    for (let index in commands) {
        let command = commands[index];
        let commandParts = command.split(' ').filter(item=>item.trim()!='');
    
        let optionalCode = commandParts[0];
        let dataList   = commandParts.slice(1);
        
        if (optionalCode === 'Blacklist' && dataList.length === 1) {
            let name = dataList[0];
            let nameIndex = currentFriendsList.indexOf(name);
            if ( nameIndex !== -1) {
                currentFriendsList[nameIndex] = 'Blacklisted';
                blacklistedNamesCount++;
                console.log(`${name} was blacklisted.`);
    
            } else {
                console.log(`${name} was not found.`);
            }
              
        }else if (optionalCode === 'Error' && dataList.length === 1) {
            let index = Number(dataList[0]);
            let name = currentFriendsList[index];
            if (name !== 'Blacklisted' && name !== 'Lost') {
                currentFriendsList[index] = 'Lost';
                lostNamesCount++;
                console.log(`${name} was lost due to an error.`);
            }

            
        }else if (optionalCode === 'Change' && dataList.length === 2){
            let index = Number(dataList[0]);
            let currentName = currentFriendsList[index];
            let newName = dataList[1];
            
            if (index >= 0 && index < currentFriendsList.length){
                currentFriendsList[index] = newName;
                console.log(`${currentName} changed his username to ${newName}.`);
            }
        }else if (optionalCode =='Report'){
            console.log(`Blacklisted names: ${blacklistedNamesCount}`);
            console.log(`Lost names: ${lostNamesCount}`);
            console.log(currentFriendsList.join(' '));
            
        } else {
            console.error(`Invalid command ${command}`);
        }
    }
    
}
//this could be potential switch case.  When I am not on a time constraint I will challenge myself to do it as a switch case.


main(`Mike, John, Eddie`, [`Blacklist Mike`, `Error 0`, `Error 1`, `Change 2 Mike123`, `Report`]);
//Mike was blacklisted. John was lost due to error.  Eddie changed his username to Mike123.  Blacklisted names: 1  Lost names: 1  Blacklisted Lost Mike123
//COMMENT: On the first line are the names from the friendlist that need to be stored in an array.  After that the commands start to flow in.  The first command finds Mike and overwrites the name with blacklist then prints out: "Mike was blacklisted." After that "Error 0" failed because the name is already blacklisted and we do nothing.  "Error 1": The name John is replaced with "Lost" and the message is sent to the console: "John was lost due to an error." After that Mike changes his username to Mike123: "Eddie changed his username to Mike123".  And the report is asked for so the program ends with the shown output.
main(`Mike, John, Eddie, William`, [`Error 3`, `Error 3`, `Change 0 Mike123`, `Blacklist Eddie`, `Report`]);
// William was lost due to an error.  Mike has changed his username to Mike123.  Eddie was blacklisted.  Blacklisted names: 1  Lost names: 1  Mike123 John Blacklisted Lost


//Our users are having trouble with their friends list, some of their friends are disappearing without a reason.  We have been tasked to create a program that finds the names that are lost, and sends out a report on it.

//The first input you will receive all is the User's friend list separated by ", ".  The next input will be a list of commands, which should be run until the "Report" command is received.

//Possible commands are : ** Blacklist {name} 1. Finds the name in  the friend list and change it to "Blacklisted" and prints on the console: "{name} was blacklisted." 2. If the name is not on the friend list print: "{name} was not found."  **Error {index} 1. Check if the useername at the given index is not "Blacklisted" or "Lost".  If it isn't, change the username to "Lost" and print on the console: "{name} was lost due to an error."  **Change {index} {newName}  1. Check if the user at index position is in range of the array.  If he/she is, change the current username with a new one and print on the console:  "{currentName} changed his username to {newName}."

//INPUT:  The first input line will contain the usernames that need to be stored.  On the next input lines until "Report" you will receive commands.

//OUTPUT: The output should be in the following format:  ** "Blacklisted names: {blacklistedNamesCount}"  ** "Lost names: {lostNamesCount}"  ** "{name1} {name2}  ... {nameN}"