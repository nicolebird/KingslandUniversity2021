//Receive three numbers (number1, number2, number3) and sort them in descending order.  Print each number on a new line. HINT: separate console logs put the numbers on separate lines. 

function sortNumbers(n1, n2, n3) {
    let maxNumber = -Infinity;
    let minNumber = Infinity;
    //infinity is literally infinite.  So numbers don't have a real start and end.
    let midNumber = "";
    //let the middle equal a string

    //this if-if-else statement covers if the maximum number is numberOne
    if (n1 > n2 && n1 > n3) {
        maxNumber = n1; {
            if (n2 > n3) {
                midNumber = n2;
                minNumber = n3;
            } else {
                midNumber = n3;
                minNumber = n2;
            }
        }
    //This if-if-else statement covers if the max number is numberTwo
    } else if (n2 > n1 && n2 > n3) {
        maxNumber = n2; {
            if (n1 > n3) {
                midNumber = n1;
                minNumber = n3;
            } else {
                midNumber = n3;
                minNumber = n1;
            }
            
        }
    //This if-if-else statement covers if the max number is numberThree
    } else if (n3 > n1 && n3 > n2) {
        maxNumber = n3; {
            if (n1 > n2) {
                midNumber = n1;
                minNumber = n2;
            } else {
                midNumber = n2;
                minNumber = n1;
            }
        }
    }
    //print max,mid,min number on separate lines
    console.log(maxNumber);
    console.log(midNumber);
    console.log(minNumber);
}
sortNumbers(2, 1, 3);