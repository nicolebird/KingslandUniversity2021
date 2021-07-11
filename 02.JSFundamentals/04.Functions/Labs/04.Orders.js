//Write a function that calculates the total price of an order and prints it on the console.  The function should receive one of the following products: coffee (1.50), coke (1.40), water (1.00), snacks (2.00); and a quantity of the product.  The prices for a single piece of each product are listed:
//Print the result formatted to the second decimal place.

//input: water 5  OR coffee 2
//output: 5.00  OR 3.00

//HINT:  Create a function that passes 2 variables in.  Print the results in the method.

function main(product, quantity){
    let output = orders(product, quantity);
    console.log(output.toFixed(2));
}

function orders(item, numOf){
    
    switch(item){
        case `coffee`:
            price = 1.50;
            break;
        case  `coke`:
            price = 1.40;
            break;
        case `water`:
            price = 1.00;
            break;
        case `snacks`:
            price = 2.00;
            break;
    }
    return price * numOf;
}

main(`water`, 5);
main(`coffee`, 2);