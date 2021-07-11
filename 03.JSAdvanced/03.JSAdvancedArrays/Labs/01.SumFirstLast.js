// //Write a function that calculates and prints the sum of the first and the last elements in an array. The input comes as array of string elements holding numbers.
// The output is the return value of your function

//First way to do this
function main(string){
    let first = Number(string[0]);
    let last = Number(string[string.length-1]);

    console.log(first + last);
}

main(['20', '30', '40']); //60
main(['5', '10']); //15


//Another way to do this
function main(someArray){
    let firstNum = Number(someArray.shift());
    let secondNum = Number(someArray.pop());

    console.log(firstNum + secondNum);
}

main(['20', '30', '40']); //60
main(['5', '10']); //15


//Another way
function main(strings){

    console.log(Number(strings.shift()) + Number(strings.pop()));

}

main(['20', '30', '40']); //60
main(['5', '10']); //15

//------------------------------
function main(numbers = []) {
    //return +numbers[0] + +numbers[numbers.length - 1];
    return Number(numbers[0]) + Number(numbers[numbers.length - 1]);

    //the return lines mean the same.  The plus sign is the abbreviation for the Number method
    
  }
  
  // Don't copy the calling of the function in the HW grader, you won't get any points, just the code above
  console.log(main(['20', '30', '40']));
  console.log(main(['5', '10']));