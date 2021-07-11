//Using a closure, create an inner obj to process list commands.  The commands supported should be the following: add <string> - adds the following string in an inner collection.  remove <string> - removes all occurrences of the supplied <string> from the inner collection.  print - prints all elements of the inner collection joined by ",".
//INPUT: will come as an array of strings - each string represents a command to be executed from the command execution engine. 
//OUTPUT: For every print command - you should print on the console the inner collection joined by ","

//fx -> arg/parameter is input
function main(input) {

    //declare that the list will indeed be an array
    let list = [];

    //declare the processor of the commands which will add, remove, print and result in a return
    const commandProcessor = (function() {
        const add = newItem => list.push(newItem);
        const remove = item => list = list.filter(el => el !== item);
        const print = () => console.log(list.join(','));
        return { add, remove, print };
    })();

    //the arg followed by forEach then pushes the commands in and splits them properly 
    input.forEach(command => {
        let [cmdName, arg] = command.split(' ');
        commandProcessor[cmdName](arg);
    });

}

main(['add hello', 'add again', 'remove hello', 'add again ', 'print ']); //again, again
main(['add pesho', 'add george', 'add peter', 'remove peter', 'print ']); //pesho, george