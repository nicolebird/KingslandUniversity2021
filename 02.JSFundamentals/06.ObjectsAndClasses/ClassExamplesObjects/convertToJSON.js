//Write a function that receives first name, last name, hair color and sets them to an object.
//Convert the object to JSON String and print it.
//INPUT: `George`, `Jones`, `Brown`

//TIPS:  Create an object with the given output.
//Use JSON.stringify() method to parse object to JSON string
//Keep in mind that the property name in the JSON string will be exactly the same as the property name in the object.

function main(firsName, lastName, hairColor) {
	let person = {
		firsName,
		lastName,
		hairColor,
	};

	let personJSON = JSON.stringify(person);
	console.log(personJSON);
}

main("George", "Jones", "Brown");

