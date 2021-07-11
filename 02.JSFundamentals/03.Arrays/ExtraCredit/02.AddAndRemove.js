function main(arrayOfStrings) {
    let addRemoveNumsInThisArray = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i] == "add") {
            addRemoveNumsInThisArray.push(Number([i]) + 1);
            //add current number to your array
        } else if (arrayOfStrings[i] == "remove") {
            addRemoveNumsInThisArray.pop();
            //remove the last entered number currently in the array
        } else {
            console.log("Empty");
        }
    }
    if (addRemoveNumsInThisArray.length === 0) {
        console.log("Empty");
    } else {
        console.log(addRemoveNumsInThisArray.join(" ").trim());
    }
}


//Write a function that adds and removes numbers to/from an array.  You will receive a command which can either be "add" or "remove"

//The inital number is 1.  Each input command should increase that number, regardless of what it is
//Upon receiving an "add" command you should add the current number to your array.
//Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.

//INPUT: The input comes as array of strings.  Each element holds a command.
//Input: [`add`,`add`,`add`,`add`] -> 1 2 3 4 
//Input: [`add`,`add`,`remove`,`add`,`add`] -> 1 4 5 
//Input: [`remove`,`remove`,`remove`]  -> Empty

//OUTPUT: Print elements in a row, separated by single space.  In case of an empty array, just print "Empty"

