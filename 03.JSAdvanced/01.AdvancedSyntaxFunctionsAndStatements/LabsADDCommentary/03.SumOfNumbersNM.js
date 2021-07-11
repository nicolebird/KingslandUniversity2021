function main(n,m){
    let n1 = +n;
    let n2 = +m;
    //let n1 = Number(n);
    //let n2 = Number(m);
    //You can use either of the let statements and it will play out correctly.  Number(n) == +n  AND Number(m) == +m
    
    //let result = 0;
    let result = Number();

    for(let i = n1; i <= n2; i++){
        result += i;
    }
    console.log(result);
    //return sum was presumed in the details but it does not result in an answer printed out in the output.
}

main(`1`,`5`);  //15
main(`-8`,`20`);  ///174

//Write a JS function that takes two numbers (n,m) as an input and prints the sum of all numbers from n to m.
//The input comes as two string elements that need to be parsed as numbers.
//The output should return the sum.
//HINT:  1)Write a function that receives two string arguments and parse them as numbers.  Use Number(string) function or just put the + before the string.  2)Declare a variable named result that will keep the mathematical results.  3)Finally resturn the result.