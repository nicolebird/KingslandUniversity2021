//Write a function that stores information about a person's name and his/her phone number.  The input comes as an array of strings.  Each string contains the name and the number.  If you receieve the same name twice just replace the number.  At the end print the result without sorting it.  Try using an associative array.

//DEFINITION: Associative array. In computer science, an associative array, map, symbol table, or dictionary is an abstract data type composed of a collection of (key, value) pairs, such that each possible key appears at most once in the collection.

//Write a function that reads names and numbers
//Store them in an associative array and print them
//If the same name occurs, safe the latest number

function main(informationList){
    let phoneBook = {};

    //this for-loop is building out phoneBook
    for(let i = 0; i < informationList.length; i++){
        let [name, phoneNumber] = informationList[i].split(" ");

        phoneBook[name] = phoneNumber;
    }

    //this goes through the key values (name)
    for(let key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`);
    }

}

main([
    `Tim 0834212554`,
    `Peter 0877547887`,
    `Bill 0896543112`,
    `Tim 0876566344`
]);

main([
    `Nina 0834212554`,
    `Nina 0877547887`,
    `Lilly 0896543112`,
    `Jen 0876566344`
]);