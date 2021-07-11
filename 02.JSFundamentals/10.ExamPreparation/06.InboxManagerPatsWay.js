function main(commandsArray){
    /*
        {
            name: [email1,email2,...,emailN,]
        }

    */

    let inbox = new Map();

    for(let i = 0; i < commandsArray.length && commandsArray[i] != "Statistics"; i++){

    }

    let [command, userName, email] = commandsArray[i].split("->");
    switch(command){
        case "Add":
            if(inbox.has(userName)){
                console.log("${userName} is already registered");
            }else{
                inbox.set(username, []);
            }
            break;
        case "Send":
            let currentEmail = inbox.get(userName);
            currentEmail.push(email);
            break;
        case "Delete":
            if(inbox.has(userName)){
                inbox.delete(userName);
            }else{
                console.log(`${userName} not found!`);
            }
            break;
    }
    //console.log(inbox);

    let sorted = Array.from(inbox.entries);
        if(a[1].length>b[1]. length){
            return 1;
        } else if(a[1].length>b[1]. length){
            return - 1;
        } else {
            if(a[0] > b[0]){
                return 1;
            }else if(a[0]< b[0]){
                return - 1;
            }else{
                return 0;
            }
            
        }
    }


    console.log(`User count: ${sorted.length}`);
    for(let [user,emails] of sorted){
        console.log(user);
        for(let email of emails){
            console.log(`${email}`);
        }
    }
}

main([`Add->Mike`,
`Add->George`,
`Send->George->Hello World`,
`Send->George->Some random test mail`,
`Send->Mike->Hello, do you want to meet up tomorrow?`,
`Send->George->It would be a pleasure`,
`Send->Mike->Another random test mail`,
`Statistics`]);