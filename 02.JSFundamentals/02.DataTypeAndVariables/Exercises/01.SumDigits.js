//Write a function which will be given a single number.  Your task is to find sum of its digits.

//INPUT: 245678 OR 27651 OR 543
//OUTPUT: 32 OR 28 OR 12

//Use a while loop 

function main(number) {
    let sum = 0;

    while(number) {
        sum += number % 10;
        //sum = sum + currentNumber % 10
        number = Math.floor(number / 10);
        //
    }
    console.log(sum);
}
main(245678); //32
main(97561); //28
main(543);  //12

