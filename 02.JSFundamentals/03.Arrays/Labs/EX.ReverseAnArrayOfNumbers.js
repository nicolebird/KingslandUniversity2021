//Write a program which receives a number (n) and an array of elements.  Your task is to create a new array with (n) numbers, reverse it and print its elements on a single line, space separated.

function main(lengthOfOutput, inputArray){
    let outputArray = [];
    //need the empty [] which gives us an undefined array
    for(let i = 0; i < lengthOfOutput; i++){
        outputArray.push(inputArray[i]);
        //this allows to push items into the empty array
    }
    //[10, 20, 30]
    let output = "";
    for(let i = outputArray.length - 1; i >= 0; i--){
        output += outputArray[i] + " ";
        //output += `${outputArray[i]}`;    
    }
    console.log(output);
}

main(3, [10, 20, 30, 40]); //30 20 10
main(4, [-1, 20, 99, 5]); //5 99 20 -1
main(2, [66,43,75,89,47]);  //43 66