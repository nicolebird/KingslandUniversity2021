//Write a program, which takes an integer from the console and prints the corresponding month.  If the number is more than 12 or less than 1 print "Error!"

//Input: You will receive a single number
//Output: If the number is within boundaries print the correspinding month, otherwise print "Error!"

//Using the array shortens and simplifies the code.  Less room for error.

function main(monthNumber){
    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //this declares the month and includes the arrays as separate strings

    if(monthNumber >= 1 && monthNumber <= 12){
        //(monthNumber is greater than or equal to 1 AND less than or equal to 12, it falls into the perimeters)
        console.log(months[monthNumber - 1]);
    }else{
  //} else if(monthNumber > 12 || monthNumber < 1) {
        console.log("Error!");
    }
}

main(15); //Error!
main(12); //December