function main(upperLimitFirstNumber,upperLimitSecondNumber,upperLimitThirdNumber){
    
    let a = upperLimitFirstNumber;
    let b = upperLimitSecondNumber;
    let c = upperLimitThirdNumber;
    
    for (let i = 2; i <= a; i++) {
        //(let firstDigit = 2; firstDigit <= upperLimitFirstNumber; firstDigit + 1)
        //let i = 2; i is less than or equal to the first number; i + 1;
    
        for (let j = 2; j <= b; j++) {
            //(let secondDigit = 2; secondtDigit <= upperLimitSecondNumber; secondDigit + 1)
            //let j = 2; j is less than or equal to the second number; j + 1;

            for (let k = 2; k <= c; k++) {
                //(let thirdDigit = 2; thirdDigit <= upperLimitThirdNumber; thirdDigit + 1)
                //let k = 2; k is less than or equal to the third  number; k + 1;

                if (i % 2 === 0 && k % 2 === 0) {
                    //let i modulous 2 is equal to 0 AND k modulous 2 is equal to 0

                    if (j === 2 || j === 3 || j === 5 || j === 7) {
                        //j is equal to 2, j is equal to 3, j is equal to 5, j is equal to 7

                        //if(prime.some(n => n == secondDigit)){
                        //this can be used in this if statement

                        console.log(`${i} ${j} ${k}`);
                    }
                }
            }
        }
    }
}
main(3, 5, 5);
main(3, 5, 5);
main(8, 2, 8);




