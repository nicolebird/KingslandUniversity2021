//Write a function, that receives a string in JSON format and converts it to object
//Print the entries of the object

function main(json) {
	let city = JSON.parse(json);

	let cityKeys = Object.keys(city);
	let cityVals = Object.values(city);

	for (let index in cityKeys) {
		console.log(`${cityKeys[index]}: ${cityVals[index]}`);
	}
}

main('{ "name": "George", "age": 40,"town": "Atlanta" }');

