//Write a function that stores products and their quantity
//If the same product appears more than once, add the new quantity to the old one.

//INPUT: [`tomatoes 10`, `coffee 5`,`olives 100`,`coffee 40`];
//OUTPUT: tomatoes -> 10, coffee -> 45, olives -> 100
function main(inventoryList){
    let storage = new Map();
   for (let currentStock of inventoryList) {
    let [product,quantity] = currentStock.split(` `);
    quantity = Number(quantity);
        if(storage.has(product)){
        let oldQuantity = storage.get(product);
        //The get syntax binds an object property to a function that will be called when that ... Defining a getter on new objects in object initializers.
        let newQuantity = oldQuantity + quantity;
        storage.set(product, newQuantity);
        //A set is a collection of items which are unique i.e no element can be repeated. Set in ES6 are ordered: elements of the set can be iterated in the insertion order. Set can store any types of values whether primitive or objects.
        }else{
            storage.set(product, quantity);
        }
    }
    let storageArray = Array.from(storage.entries());
    // [`tomatoes 10`, `coffee 5`,`olives 100`,`coffee 40`]
    for(let productPair of storageArray){
        let [product, quantity] = productPair;
        console.log(`${product} -> ${quantity}`);
    }
}

main( [`tomatoes 10`, `coffee 5`,`olives 100`,`coffee 40`]);