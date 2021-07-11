//Write a function that stores products and their quantity
//If the same product appears more than once, add the new quantity to the old one.

//INPUT: [`tomatoes 10`, `coffee 5`,`olives 100`,`coffee 40`];
//OUTPUT: tomatoes -> 10, coffee -> 45, olives -> 100
function main(deliveries){
    //creating a new map
    let storage = new Map();

    for(let i=0; i < deliveries.length; i++){
        let [product, amount] = deliveries[i].split(" ");
        amount = Number(amount);

        //this builds out our storage
        if(storage.has(product)){
        //.has means do we have it
            let currentAmount = storage.get(product);
            let newAmount = currentAmount + amount;
            storage.set(product, newAmount);

        }else{
            storage.set(product, amount);

        }
    }
    for(let keyValuePair of storage){
        console.log(`${keyValuePair[0]} -> ${keyValuePair[1]}`);
    }

}

main( [`tomatoes 10`, `coffee 5`,`olives 100`,`coffee 40`]);

//has set get have all been set for maps
