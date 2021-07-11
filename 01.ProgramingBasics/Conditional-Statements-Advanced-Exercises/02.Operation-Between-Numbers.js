function main(n1, n2, operator) {
    let result = 0.00;
    if (operator == "+") {
        result = n1 + n2;
    } else if (operator == "-") {
        result = n1 - n2;
    } else if (operator == "*") {
        result = n1 * n2;
    } else if (operator == "/") {
        result = n1 / n2;
    } else if (operator == "%") {
        result = n1 % n2;
    }else {
        console.log("Please select operator +, -, *, /, or %");
    }

    if ((operator == "+") || (operator == "-") || (operator == "*")) {
        if (result % 2 == 0) {
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (((operator == "/") || (operator == "%")) && (n2 == 0)) {
        console.log(`Cannot divide ${n1} by zero`); 
    } else if ((operator == "/") && (n2 != 0)) {
        console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
    } else {
        console.log(`${n1} ${operator} ${n2} = ${result}`);
    }
    
}
main(1034, 16960, "/");


