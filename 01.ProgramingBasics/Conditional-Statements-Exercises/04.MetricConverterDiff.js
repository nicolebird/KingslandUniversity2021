function main(number, input, output) {
	let meter = 0;
	let result = 0;
	if (input === "m") {
		meter = number / 1;
	} else if (input === "mm") {
		meter = number / 1000;
	} else if (input === "cm") {
		meter = number / 100;
	} else if (input === "mi") {
		meter = number / 0.000621371192;
	} else if (input === "in") {
		meter = number / 39.3700787;
	} else if (input === "km") {
		meter = number / 0.001;
	} else if (input === "ft") {
		meter = number / 3.2808399;
	} else if (input === "yd") {
		meter = number / 1.0936133;
	}
	if (output === "m") {
		result = meter * 1;
    } else if (output === "m") {
        result = meter = number / 1;
	} else if (output === "mm") {
		result = meter * 1000;
	} else if (output === "cm") {
		result = meter * 100;
	} else if (output === "mi") {
		result = meter * 0.000621371192;
	} else if (output === "in") {
		result = meter * 39.3700787;
	} else if (output === "km") {
		result = meter * 0.001;
	} else if (output === "ft") {
		result = meter * 3.2808399;
	} else if (output === "yd") {
		result = meter * 1.0936133;
	}
	console.log(result.toFixed(10));
}


main(12, "km", "ft");
main(150, "mi", "in");
main(450, "yd", "km");
main(12423, "yd","yd");