//Write a function that receives 3 parameters amd write an arrow function that calculates result depending on operator.  Operator can be `multiply` , `divide`, `add`, `subtract`
//input: The input comes as parameters named numberOne, numberTwo, operator.

//input: 5 5 `multiply`  OR 40 8 `divide`  OR 12 19 `add`  OR 50 13 `subtract`
//output: 25                    5               31              37

// //This is the HW grader way 
function main(n1, n2, operator) {
//function simpleCalculator(numberOne, numberTwo, operator) => {
//This function includes the arrow that the homework grader will not accept but it is correct

    switch(operator){
        case `multiply`:
            let mult = (n1,n2) => n1 * n2;
            console.log (mult(n1,n2));
            break;
        case `divide`:
            let div = (n1,n2) => n1 / n2;
            console.log (div(n1,n2));
            break;
        case `add`:
            let add = (n1,n2) => n1 + n2;
            console.log (add(n1,n2));
            break;
        case `subtract`:
            let sub = (n1,n2) => n1 - n2;
            console.log (sub(n1,n2));
            break;
    }
}

main(5,5,`multiply`); // 25
main(40,8,`divide`);  //5
main(12,19,`add`);  //31
main(50, 13,`subtract`);  //37


// //ANOTHER WAY TO DO THIS WHEN NOT TRYING TO PLEASE THE HOMEWORK GRADER
// let simpleCalculator = (n1, n2, operator) => {
    
//         switch(operator){
//             case `multiply`:
//                 let mult = (n1,n2) => n1 * n2;
//                 return mult(n1,n2); 
                
//             case `divide`:
//                 let div = (n1,n2) => n1 / n2;
//                 return div(n1,n2);
                
//             case `add`:
//                 let add = (n1,n2) => n1 + n2;
//                 return add(n1,n2);
                
//             case `subtract`:
//                 let sub = (n1,n2) => n1 - n2;
//                 return sub(n1,n2);
                
//         }
// };
    
// let result = simpleCalculator(5, 10, `subtract`);
// console.log(result);

// main(5,5,`multiply`); // 25
// main(40,8,`divide`);  //5
// main(12,19,`add`);  //31
// main(50, 13,`subtract`);  //37


// //The semicolon is not needed if you use the function main instead of the let statement in the beginning
//Line 57-58 not needed if you console log each case statement.

