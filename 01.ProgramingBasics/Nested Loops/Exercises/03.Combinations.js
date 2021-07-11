//this covers five possiblities ... the final for loop contains an if statement adding all the numbers together and asking if it is equal to the number mentioned in the main.  If it does solution + 1.  The console loop ends the box started by the first for loop and simply resolves with solutions/

function main(number) {
    let solutions = 0;
    for (n1 = 0; n1 <= number; n1++) {
        for (n2 = 0; n2 <= number; n2++) {
            for (n3 = 0; n3 <= number; n3++) {
                for (n4 = 0; n4 <= number; n4++) {
                    for (n5 = 0; n5 <= number; n5++) {
                        if (n1 + n2 + n3 + n4 + n5 == number) {
                            solutions++;
                        }
                    }
                }
            }
        }
    }
    console.log(solutions);
}
main(25);
// main(10);
// main(7);
// main(0);
// main(1);
// main(4);