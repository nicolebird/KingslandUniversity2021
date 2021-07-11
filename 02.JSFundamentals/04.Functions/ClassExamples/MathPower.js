//Create a function that calculates the value of a number
//The number should be raised to a given power
//Return it's value

//BASIC/OLD WAY TO SOLVE
// function solve(number, power){
//     let baseValue = 1;
//     //loop exponent times
//     for(let i = 0; i < power; i++){
//         //multiply the base value
//         baseValue = baseValue * number;
//     }
//     return baseValue;
// }

// solve(2,8); // 256
// solve(3,4); // 81

function powerOf(number, power){

    let product = 1;

    for(let i = 0; i <power; i++){
        product = mult(product, number);
    }
    return product;
}

function mult(a, b){
    return a * b;
}
console.log(powerOf(22,3));



