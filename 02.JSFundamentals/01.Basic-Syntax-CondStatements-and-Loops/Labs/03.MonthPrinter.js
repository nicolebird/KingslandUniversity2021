//Write a program, which takes an integer from the console and prints the corresponding month.  If the number is more than 12 or less than 1 print "Error!"

//Input: You will receive a single number
//Output: If the number is within boundaries print the correspinding month, otherwise print "Error!"

//This is effective as an if-else-if statement BUT works better as an array

function main(number) {

    if ((number > 12) || (number < 1)) {
        console.log("Error!");
    }
    //This covers the numbers outside of the 12 months possible.  It immediately covers the parameters outside of the parameters.  If the number is more than 12 or less than one then the "Error!" message prints out and that is the end of the function.

    if (number == 1) {
        console.log("January");
    } else if (number == 2) {
        console.log("February");
    } else if (number == 3) {
        console.log("March");
    } else if (number == 4) {
        console.log("April");
    } else if (number == 5) {
        console.log("May");
    } else if (number == 6) {
        console.log("June");
    } else if (number == 7) {
        console.log("July");
    } else if (number == 8) {
        console.log("August");
    } else if (number == 9) {
        console.log("September");
    } else if (number == 10) {
        console.log("October");
    } else if (number == 11) {
        console.log("November");
    } else if (number == 12) {
         console.log("December");
    }
}
main(2);//output: February
main(13);//output: Error!

