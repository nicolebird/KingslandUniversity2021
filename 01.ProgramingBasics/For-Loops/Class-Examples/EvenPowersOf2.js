//PATS SOLUTION
function main(highestPower){
    let output = ``;

    for(let i = 0; i <= highestPower; i +=2){  
        if(i>0){
            output += `,`;
        }
        output += 2 ** i; //math.pow
    }
    console.log(output); //2^0 - 1, 2^2 -4, 2^4 - 16, 2^6 - 64, 2^8 - 256, 2^10 - 1024 
}

main(10);



//MY SOLUTION
// function main(n){
//     let num = 1;
//     //variable num is equal to one
//     let result = ``;
//     //variable result is equal to string
//     for(let i = 0; i <= n; i += 2){
//         //let i is equal to one & i is less than or equal to i & i +=2 -> i + 2
//         if(i > 0){
//             //if i is greater than 0
//             result += `,`;
//             //result equals adding a string
//         result += num;
//         //result is adding to the number
//         num = num * 2 * 2;
//         //the number is equal to number x 2 x 2
//         }
//         console.log(result);
//         //console is equal to the final result
//     }
// }

// main(10);
// //main(7);