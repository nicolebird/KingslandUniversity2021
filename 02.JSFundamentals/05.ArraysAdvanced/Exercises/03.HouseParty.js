// Write a function that keeps track of guests going to house party
// You will be given an array of string.  Each string will be one of the following:
// - "{name} is going!"
// - "{name} is not going!"
// If is going is received:
    // not on list, add the person. 
    //is on list, print "{name} is already in the list!"

// If not going is received: 
    // is on list, remove
    // is not on list, print "{name} is not in the list!"

    //At end, print all the guests, each on a separate line. 


    function main(possiblePartyPeople) {

        let output = [];
        //let output equal an array
        for (let i = 0; i < possiblePartyPeople.length; i++) {
            //The length property returns the length of a string (number of characters). The length of an empty string is 0
            let temporaryIndex = possiblePartyPeople[i].indexOf(' ');
            //The indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs. Note: The indexOf() method is case sensitive 
            let name = possiblePartyPeople[i].slice(0, temporaryIndex);
            //The slice() method returns the selected elements in an array, as a new array object. The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument. Note: The original array will not be changed. 
            let action = possiblePartyPeople[i].slice(temporaryIndex + 1); 
            //declaring the temporaryIndex, name and action for this entire for loop.
    
            if (action == 'is going!') {
            //if the person is going    
                if (output.includes(name)) {
                //include their name in the output that says they we already on the list
                    console.log(`${name} is already on the list!`);
                } else {
                    output.push(name); //adds Allie to the list
                    //this pushes the name into the output
                }  
                
            } else if (action == 'is not going!') {
                //if this person is not going
                if (output.includes(name)) {
                //lets include the name of who isn't going
                    for (j = 0; j < output.length; j++) {
                      
                        if (output[j] === name) {
                            output.splice(j, 1);
                        } else {
                            
                        }
                    }
                } else {
                    console.log(`${name} is not in the list!`);
                }  
                
            }
        }
        
        for (k = 0; k < output.length; k++) {
            console.log(output[k]);
        } //At end, print all the guests, each on a separate line.
    }
    main(['Allie is going!','George is going!','John is not going!','George is not going!']);
    
    
    // John is not in the list!
    // Allie
    
    
    