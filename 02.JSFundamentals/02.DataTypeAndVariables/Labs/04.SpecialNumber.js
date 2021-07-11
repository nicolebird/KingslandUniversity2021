//Write a program to receive a number n and for all numbers in the range 1...n print the number and if it is special or not (True / False).
//A number is special when its sum of digits is 5, 7, or 11.

//HINT:  To calculate the sum of digits of given num, you might repeat the following: sum the last digit (num % 10) and remove it (sum = sum /10) until num reaches 0.  Use parseInt() while dividing to get only integer numbers.
function main(maxNumber){
    for(let i = 1; i <= maxNumber; i++){
        let numString = i.toString();
        let sum = 0;
        for(let j = 0; j < numString.length; j++){
            sum += Number(numString[j]);
        }

        if(sum == 5 || sum == 7 || sum == 11){
            console.log(`${i} -> True`);
        }else {
            console.log(`${i} -> False`);
        }
    }
}

main(15);