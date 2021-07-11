//You will receive 3 numbers
//Find their sum and print `{Sum} - {Integer or Float}`

// several ways to solve this problem.

//Way one
function main(n1, n2, n3){
    let sum = n1 + n2 + n3;
    //let the sum be all of the numbers added
    let output = sum % 1 === 0
    //let the output equal sum modulous 1 equal to zero 
    ? sum + ` -Integer` : sum + ` -Float`;
    console.log(output);
}


//Way two
function main(n1,n2,n3){
    let sum = n1+n2+n3;

    if(sum%1==0){
        console.log("Integer");
    }else {
        console.log("Float");
    }
}

//Way three
function main(n1,n2,n3){

    let sum = n1 + n2 + n3;
    let roundedSum = Math.round(sum); // Math.ceil(sum), Math.floor(sum);
    if(sum == roundedSum){
        console.log("Integer");
    }else{
        console.log("Float");
    }
}

main(112.3, 212.3, 5);
main(9, 100, 1.1);
main(100, 200, 303);

