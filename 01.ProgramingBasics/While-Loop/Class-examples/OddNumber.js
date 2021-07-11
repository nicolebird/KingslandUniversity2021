function main(numbers){
    //take in the first number in the list
    let num = numbers.shift();
    //is it odd?
    while (num % 2 === 0 && num != undefined) {
        //if the current number isn't odd (even)
        //move to the next number on our list
        num = numbers.shift();
    }
    //when the odd number is found, print it
    console.log(num);
}

//main([1, 3, 5]);
main([2, 4, 8, 3]);


//main can also be named findFirstOddNumber
// % means modulous unless it's inside quotes.
