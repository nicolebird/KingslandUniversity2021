function main(stopNumber, numberList){
    let previousNumbers = 0;
    let currentNumber = numberList.shift();

    while(currentNumber != stopNumber){
        previousNumbers = currentNumber;
        currentNumber = numberList.shift();
    }

    // previousNumbers = previousNumbers + previousNumbers * 2;
    // previousNumbers = previousNumbers * 1.2;
    previousNumbers *= 1.2;
    console.log(previousNumbers);
}

main(25, [20, 30, 25]);