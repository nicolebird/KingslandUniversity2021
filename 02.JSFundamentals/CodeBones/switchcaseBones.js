function main(stuff){
    let email = stuff.shift();

    let command = stuff.shift();
    while(command != `Complete`){
        let[direction, item] = command.split(" ");

        switch(direction){
            case "Make":
                //code
                break;
            case "GetDomain":
                //get domain stuff
                break;
            case "GetUsername":
                //get user name stuff
                break;
            case "Replace":
                /// replace a char with a -
                break;
            case "Encrypt":
                //change to ASCII
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