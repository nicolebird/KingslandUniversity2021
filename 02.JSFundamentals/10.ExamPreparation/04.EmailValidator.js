function main(stringArray) { 
    let email = stringArray.shift();
    for (i = 0; i < stringArray.length - 1; i++) {
        let command = stringArray[i].split(' ');
        switch (command[0]) {
            case ('Make'):
                if (command[1] == 'Upper') {
                    email = email.toUpperCase();
                } else {
                    email = email.toLowerCase();
                }
                console.log(email);
                break;
            case ('GetDomain'):
                console.log(email.substr(email.length - command[1], command[1]));
                break;
            case ('GetUsername'):
                if (email.includes('@')) {
                    console.log(email.substring(0, email.indexOf("@")));
                } else {
                    console.log(`The email ${email} doesn't contain the @ symbol.`);
                }
                break;
            case ('Replace'):
                let item = new RegExp(command[1], 'g');
                email = email.replace(item, '-');
                console.log(email);
                break;
            case ('Encrypt'):
                let updatedEmail = [];
                for (let char in email) {
                    updatedEmail.push(email.charCodeAt(char));
                }
                console.log(updatedEmail.join(' '));
                break;
        }
    }
}

main([
    `Mike123@someemail.com`,
    `Make Upper`,
    `GetDomain 3`,
    `GetUserName`,
    `Encrypt`,
    `Complete`,
]);