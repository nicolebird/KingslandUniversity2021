//A panlindrome is a number which reads the same backward as forward, such as 323 or 1001.  Write a function which receives an array of positive integer and checks if each integer is a palindrome or not.

//input: [123,323,421,121]  OR  [32,2,323,1010]

function palindrome(number) {
    let currentNumber = number.toString().split("");
    //this splits the numbers up into separate strings
    
    let reverseCurrentNumber = [...currentNumber];
    // [...currentNumber] runs through the array of current numbers
    
    reverseCurrentNumber.reverse();
    //Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
    for (let i = 0; i < currentNumber.length; i++) {
    //this for loop is structured to run through the false or nonpalindromeIntegers
        if (currentNumber[i] != reverseCurrentNumber[i]) {
        //if the current number index is not the same as the reverse number index then the result is false or not a palindrome integer
            return false;
        }
    }
    //otherwise return true or that it is a palindrome
    return true;
}
function main(array) {
    for (let i = 0; i < array.length; i++) {
    //this for loop gives the values/numbers as either false or true depending on if the numbers are a palindrome
        let returnValue = palindrome(array[i]);
        if (returnValue == true) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
main([123, 323, 421, 121]);
//false true false true
