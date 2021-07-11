//You are given a function, that calculate the result of numOne * numTwo * numThree (the product) is negative or positive
//Try to do this WITHOUT multiplying the 3 numbers.
//The input comes as parameters named numOne,numTwo,numThree

//Don't overthink this!! It takes into account all possibilities without multiplying the numbers

function main(numOne,numTwo, numThree){
    let output = wrongResult(numOne,numTwo,numThree);
    console.log(output);
}
function wrongResult(numOne, numTwo, numThree) {
    let numOfNegatives = 0;
    if(numOne < 0){
        numOfNegatives++;
    }
    if(numThree < 0){
        numOfNegatives++;
    }
    if(numTwo < 0){
        numOfNegatives++;
    }
    if (numOne == 0 || numTwo == 0 || numThree == 0){
        return `Positive`;

    } else if (numOfNegatives % 2 == 0) {
        return `Positive`;
    
    }else{
        return `Negative`;
    }
       
}
main(5, 12, -15); //Negative
main(-6,-12,14); //Positive
main(-1,-2,-3); //Negative
main(-1,0,1);  //Positive