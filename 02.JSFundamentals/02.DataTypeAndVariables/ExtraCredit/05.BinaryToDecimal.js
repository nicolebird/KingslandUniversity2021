function main(binaryNum) {
    let binary = parseInt(binaryNum, 2);
    console.log(binary);
}
main("00001001"); //the quotation marks make this a string

//Another way
function main(string) {
    let changeToDecimal = +0;
    let nums = +1;
    for (let i = 0; i < string.length; i++) {
        let currNum = +(string[string.length - i - 1]);
        if (currNum === 1) {
            changeToDecimal += nums;
        }
        nums *= 2;
    }
    console.log(changeToDecimal);
}

main("00001001");