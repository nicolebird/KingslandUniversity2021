function main(num1, num2, num3) {
    let biggestNumber = 0;
    if (num1 > num2 && num1 > num3) {
        biggestNumber = num1;
    } else if (num2 > num1 && num2 > num3) {
        biggestNumber = num2;
    } else if (num3 > num2 && num3 > num1) {
        biggestNumber = num3;
    }
    console.log(biggestNumber);
}
main(-2, 7, 3);

//Another Way
function main(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            console.log(num1);
        } else {
            console.log(num3);
        }
    } else if (num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

main(-2, 7, 3);