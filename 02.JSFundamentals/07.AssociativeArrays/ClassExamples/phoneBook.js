//Write a function that reads names and numbers
//Store them in an associative array and print them
//If the same name occurs, safe the latest number

function main(information){
    let phoneBook = {};
    for (let entry of information) {
        let [name,number] = entry.split(` `);
        phoneBook [name] = number;
        
    }
    for(let name in phoneBook){
        console.log(`${name} -> ${phoneBook[name]}`);
    }
    
}

main([
    `Tim 0834212554`,
    `Peter 0877547887`,
    `Bill 0896543112`,
    `Tim 0876566344`
]);