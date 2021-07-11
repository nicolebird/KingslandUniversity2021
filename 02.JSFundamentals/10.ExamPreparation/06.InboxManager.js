function main(commands) {

    //Use map for preserving order
    
    let users = {};
    for (let index = 0; index < commands.length; index++) {
        let command = commands[index];
        if (command.includes("Add")) {
            let username = command.split("->")[1];
            if (!!users[username]) {
                console.log(`${username} is already registered`);
            } else {
                users[username] = { sentEmails: [] };
            }
        } else if (command.includes("Send")) {
            let [send, username, sentEmail] = command.split("->");
            if (!!users[username]) {
                users[username].sentEmails.push(sentEmail);
            }
        } else if (command.includes("Delete")) {
            let username = command.split("->")[1];
            if (!!users[username]) {
                delete users[username];
            } else {
                console.log(`${username} not found!`);
            }
        } else if (command.includes("Statistics")) {
            
            let userEntries = Object.entries(users);
           
            userEntries.sort((first, sec) => {
                let user1Username = first[0];
                let user2Username = sec[0];
                let user1SentEmailsCount = first[1].sentEmails.length;
                let user2SentEmailsCount = sec[1].sentEmails.length;
                if (user1SentEmailsCount > user2SentEmailsCount) {
                    return -1;
                } else if (user1SentEmailsCount < user2SentEmailsCount) {
                    return 1;
                } else {
                    if (user1Username > user2Username) {
                        return 1;
                    } else if (user1Username < user2Username) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            });
            console.log(`Users count: ${userEntries.length}`);
            for (let index = 0; index < userEntries.length; index++) {
                let [username, objValue] = userEntries[index];
                let { sentEmails } = objValue;
                console.log(username);
                for (let secondIndex = 0; secondIndex < sentEmails.length; secondIndex++) {
                    let sentEmail = sentEmails[secondIndex];
                    console.log(` - ${sentEmail}`);
                }
            }
            break;
        }
    }
}
main([`Add->Mike`,`Add->George`,`Send->George->Hello World`,`Send->George->Some random test mail`,`Send->Mike->Hello, do you want to meet up tomorrow?`,`Send->George->It would be a pleasure`,
`Send->Mike->Another random test mail`,`Statistics`]);