function main(shape, size) {
	let area = 0;
	if (shape === "square") {
		area = size * size;
	} else if (shape === "circle") {
		// else if gives room to add other shapes
		area = Math.PI * size * size;
		//circle calculation is: pi * radius * radius
	}
	console.log(`${area.toFixed(2)}`);
}

main("square", 5);
main("circle", 5);
