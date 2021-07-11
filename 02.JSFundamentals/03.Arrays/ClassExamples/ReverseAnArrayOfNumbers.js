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

main(3, [10, 20, 30, 40]);
main(4, [-1, 20, 99, 5]);