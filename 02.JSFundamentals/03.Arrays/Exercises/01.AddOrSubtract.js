//Write a function, which changes the value of odd and even numbers in an array of numbers.
//IF the number is even - add to its value its index position
//IF the number is odd - subtract to its value its index position

//OUTPUT  On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.

function main(numbers) {
    //input numbers is the original value of the odd or even numbers given to start
    let newArray = [];
    //declare the variable newArray
    let originalArraySum = 0;
    //declare the variable originalArraySum
    let newArraySum = 0;
    //declare the variable newArraySum
    
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            //if the input modulous 2 is equal to 0
            originalArraySum += numbers[i];
            //then the originalArraySum is equal to itself plus the numbers[iterator]
            newArray.push(numbers[i] + i);
            //the newArray is pushed forward with the numbers[iterator] plus the iterator
            newArraySum += numbers[i] + i;
            //this creates the newArraySum which is equal itself plus the numbers[iterator] plus the iterator
        } else {
            //OTHERWISE
            originalArraySum += numbers[i];
            //the originalArraySum is equal to itself plus numbers[iterator]
            newArray.push(numbers[i] - i);
            //The newArray is this pushed back by the subtraction of numbers[iterator] minus iterator
            newArraySum += numbers[i] - i;
            //the newArraySum is equal to itself plus numbers[iterator] minus iterator
        }
    }
    console.log(newArray);
    //On the first line print the newly modified array
    console.log(originalArraySum);
    //on the second line print the sum of numbers from the original array
    console.log(newArraySum);
    //on the third line print the sum of numbers from the modified array

}

main([5, 15, 23, 56, 35]);

// main([5, 15, 23, 56, 35]); //[5, 14, 21, 59, 31] 134 130
// main([-5, 11, 3, 0, 2]); // [-5, 10, 1, 3, 6] 11 15