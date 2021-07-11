//Write a function which receives two names as string parameters and a delimiter.  Print the name joined by delimiter.

function main(firstName, secondName, delimiter){
    console.log( `${firstName}${delimiter}${secondName}`);
}

main(`John`, `Smith`, `->`); //John -> Smith
main(`Jan`, `White`, `<->`);  //Jan <-> White
main(`Linda`, `Terry`, `=>`); //Linda => Terry