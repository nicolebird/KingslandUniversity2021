//You will be given a number and you must return whether that number (number) is divisble by the following numbers: 2,3,6,7, or 10.  You should always take the bigger division.  If the number is divisble by 2 it is sometimes also divisible by 10 and you should print the division by 10.  If the number is not divisible by any of the given numbers print "Not divisible".  Otherwise print "The number is divisible by {number}"

//do the numbers in descending order to keep the if - else loop running.  If you do it in ascending the loop will not keep running.
//Use the modulous 

function numberDivision(number){
    let output = -Infinity;

    if (number % 10 == 0) {
        output = 10;
    } else if (number % 7 == 0) {
        output = 7;
    } else if (number % 6 == 0) {
        output = 6;
    } else if (number % 3 == 0) {
        output = 3;
    } else if(number % 2 == 0) {
        output = 2;
    }
    if(output == 10 || output == 7 || output == 6 ||  output == 3 || output == 2){
        console.log(`The number is divisible by ${number}`);
    } else {
        console.log(`Not divisible`);
    }
}

numberDivision(30); //The number is divisible by 10
numberDivision(15); //The number is divisible by 3
numberDivision(12); //The numnber is divisible by 6
numberDivision(1643); //Not divisible







