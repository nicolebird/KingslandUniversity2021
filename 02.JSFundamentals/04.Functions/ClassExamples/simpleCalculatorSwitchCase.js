//Write a function that receives 3 parameters and write an arrow function, that calculates a result depending on the operator.
//The operator can be `multiply`, `divid`, `add`, `subtract`
//The input comes as three parameters - two numbers and an operator string.

//input: 5, 10, `multiply` // output 50

//Using the arrow in the problem, arrow function

let simpleCalulator = (number1, number2, operator) => {
	//3 parameters: number1,number2,number3 and write an arrow function =>
	switch (operator) {
		case "multiply":
			let mult = (number1, number2) => number1 * number2;
			return mult(number1, number2);
            //console.log(mult(n1, n2));
			// break;
		case "divide":
			let div = (number1, number2) => number1 / number2;
			return div(number1, number2);
            //console.log(div(n1, n2));
			// break;
		case "add":
			let add = (number1, number2) => number1 + number2;
			return add(number1, number2);
            //console.log(add(n1, n2));
			// break;
		case "subtract":
			let sub = (number1, number2) => number1 - number2;
			return sub(number1, number2);
            //console.log(sub(n1, n2));
			// break;
	}
};

let result = simpleCalulator(5, 10, "subtract"); // 50
console.log(result);
