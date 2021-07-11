// create a program that finds the names that are lost
// and send out a report on it
// first input will: contain usernames
// next input lines until report: commands
// When you hit Report, send out report. 

function main(userNames, commands) {
    //breaking usernames into an array
    let friendList = userNames.split(',').map(name=>name.trim());
    //declare the friends list into an array separated by commas then put them into a "map" while trimming away the white space.
    let blacklistedNamesCount = 0;
    //start the black listed names at zero
    let lostNamesCounted = 0;
    //start the lost names count at zero

    //walking through the commands and execute each one
    for (let index in commands) {
    //this for-in loop handles the commands within the index
        let command = commands[index];
        let commandParts = command.split(' ').filter(item=>item.trim()!='');
        //REMINDER: ensure that command parts have at least one element else continue
        //console.log(commandParts);
        
        let optionalCode = commandParts[0];
        let dataList = commandParts.slice(1);
        
        //decide on what to do based on the opcode
        if (optionalCode === 'Blacklist' && dataList.length === 1) {
            //HINT: execute action here
            //1. find the Name
            let name = dataList[0];
            let nameIndex = friendList.indexOf(name);
            if ( nameIndex !== -1) {
                //2. blacklist name if found
                //change name to 'Blacklisted
                friendList[nameIndex] = 'Blacklisted';
                blacklistedNamesCount++;
                console.log(`${name} was blacklisted.`);
                //3. if not found tell user
            } else {
                console.log(`${name} was not found.`);
            }
            
        //decide on what to do based on the opcode   
        }else if (optionalCode === 'Error' && dataList.length === 1) {
            //TODO: execute action here
            //1. check if the username at the given index is not 'Blacklisted' or 'Lost'
            let index = Number(dataList[0]);
            let name = friendList[index];
            if (name !== 'Blacklisted' && name !== 'Lost') {
                //If not blacklisted or lost, change name to Lost
                friendList[index] = 'Lost';
                lostNamesCounted++;
                console.log(`${name} was lost due to an error.`);
            }

            
        // Decide on what to do based on opcode
        }else if (optionalCode === 'Change' && dataList.length === 2){
            // check if user at index position in range of the array
            let index = Number(dataList[0]);
            let currentName = friendList[index];
            let newName = dataList[1];
            //Check range
            if (index >= 0 && index < friendList.length){
                friendList[index] = newName;
                console.log(`${currentName} changed his username to ${newName}.`);
            }
        }else if (optionalCode === 'Report'){
            //print count of blacklisted names
            console.log(`Blacklisted names: ${blacklistedNamesCount}`);
            //print count of lost names
            console.log(`Lost names: ${lostNamesCounted}`);
            //print friendlist separated by a single space
            console.log(friendList.join(' '));
            
        } else {
            console.error(`Invalid command ${command}`);
        }
    }
    //console.log(friendList);
}

main(`Mike, John, Eddie`, [`Blacklist Mike`, `Error 0`, `Error 1`, `Change 2 Mike123`, `Report`]);
main(`Mike, John, Eddie, William`, [`Error 3`, `Error 3`, `Change 0 Mike123`, `Blacklist Eddie`, `Report`]);

// Expected Output:
// Mike was blacklisted. 
// John was lost due to an error. 
// Eddie changed his username to Mike123. 
// Blacklisted names: 1
// Lost names: 1
// Blacklisted Lost Mike123