function sumFirstNumbers(n){
    let sum = 0; //if you set this # to 1 you have to put the let i = 2
    let output = "";
    //sum +1
    //sum +2
    //sum +3
    //sum +4
    //sum +5

    for(let i = 1; i <= n; i++){
        if(i < n){
            output += i + " + "; 
        } else {
        output += i + " = ";
        }

        sum += i;
        
    }
    console.log(output + sum);
}

//sumFirstNumbers(5);
//sumFirstNumbers(7);
sumFirstNumbers(9);