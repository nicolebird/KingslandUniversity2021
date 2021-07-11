function main(n, numArray) {

    let evenSum = 0;
    let evenMin = 0;
    let evenMax = 0;
    let oddSum = 0;
    let oddMin = 0;
    let oddMax = 0;

    for (let i = 1; i <= n; i++) {
        num = numArray.shift();

        if (i % 2 == 0) {
            evenSum += num; {
                if (num < evenMin) {
                    evenMin = num;
                }
                
                if (num > evenMax) {
                    evenMax = num;
                } 
            }
        } else {
            oddSum += num; {
                if (num < oddMin) {
                    oddMin = num;
                } 
                if (num > oddMax) {
                    oddMax = num;
                } 
            }

            }
        }
        console.log(`Odd Sum: ${oddSum.toFixed(2)}`);

        if (oddMin == 0) {
            console.log("Odd Min: No");
        }else {
            console.log(`Odd Min: ${ oddMin.toFixed(2)}`);
        }

        if (oddMax == 0) {
            console.log("Odd Max: No");
        }else {
            console.log(`Odd Max: ${oddMax.toFixed(2)}`);
        }

        console.log(`Even Sum: ${evenSum.toFixed(2)}`);

        if (evenMin == 0) {
            console.log("Even Min: No");
        }else {
            console.log(`Even Min: ${evenMin.toFixed(2)}`);
        }

        if (evenMax == 0) {
            console.log("Even Max: No");
        }else {
            console.log(`Even Max: ${evenMax.toFixed(2)}`);
        }
}

main(5, [3, -2, 8, 11, -3]);
main(0);
