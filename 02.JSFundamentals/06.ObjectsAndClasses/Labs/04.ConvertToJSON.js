// Write a function that receives name, lastName, hairColor and sets them to an Object.

// Convert the object to JSON string and print it.

// Input is provided as 3 single strings in the order stated above.



function main(name, lastName, hairColor) {

    let person = {
    
    firstName: name,
    
    lastName,
    
    hairColor,
    
    };
    
    console.log(JSON.stringify(person));
    
    }
    
    main('George','Jones', 'Brown');