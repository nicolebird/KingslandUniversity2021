//Write a program that calculates the difference between the sum of the even and the sum of odd numbers in an array.

//INPUT: [1,2,3,4,5,6]  OUTPUT: 3
//COMMENTS: 2+4+6=12, 1+3+5=9, 12-9=3
//INPUT: [3,5,7,9]  OUTPUT: -24
//INPUT: [2,4,6,8,10] OUTPUT: 30

//HINT: Parse each string to number
//Create two variables - for even and odd sum
//Iterate through all elements in the array with for-of loop and check if the number is odd or even
//Print the difference
function main(inputArray){
    let evenSum = 0;
    let oddSum = 0;

    for(let num of inputArray){
        if(num % 2 == 0){
            evenSum += num;
        }else{
            oddSum += num;
        }
    }
    let difference = eveSum - oddSum;
    console.log(difference);
}

main([1, 2, 3, 4, 5, 6]);