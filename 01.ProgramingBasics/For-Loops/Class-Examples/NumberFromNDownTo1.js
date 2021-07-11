function main(n){
    let result = ``;
    //result is the variable
    //result is equal to a string

    for(let i = n; i >= 1; i--){
        if(i > n)
            result += ", ";
        result += i;
    }
    console.log(result);
}

main(10);
//main(7);
//main(14);

//in complex loop lesson taught 3/1/2021

