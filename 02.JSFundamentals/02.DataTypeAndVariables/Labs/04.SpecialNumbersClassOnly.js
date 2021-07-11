//Write a program to receive a number n and for all numbers in the range 1...n print the number and if it is special or not (True / False).
//A number is special when its sum of digits is 5, 7, or 11.

//HINT:  To calculate the sum of digits of given num, you might repeat the following: sum the last digit (num % 10) and remove it (sum = sum /10) until num reaches 0.  Use parseInt() while dividing to get only integer numbers.

function main(maxNumber) {
    
    let num = 0;
    let sum = 0;
    
    for (i = 1; i <= maxNumber; i++) {
        num = i;

        while (num > 0) {
            sum += num % 10;
            num = parseInt(num / 10);
        }
        if (sum.toString().includes("5") || 
           sum.toString().includes("7") ||
           sum.toString().includes("11")) {
               console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        sum = 0;
    }

}
main(15);

//bigger numbers the sum.toString().includes("5") would cause issues.  Okay for class but not great for real world.
