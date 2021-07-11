//create an object that has a first name, last name and age
//print the entries of a given object

//FIND THE ISSUES WITH THIS

function main1(fName, lName, age) {
	let person = {
		firstName: fName,
		lastName: lName,
		age: age,
	};
	//  keyName: value
	let personArray = Object.entries(person);
	// for (let keyValPair of personArray) {
	// 	console.log(`${keyValPair[0]}: ${keyValPair[1]}`);
	// }
	for (let [key, value] of personArray) {
		console.log(`${key}: ${value}`);
	}
	//personArray [ ["firsName","Peter"] , ["lastName","Pan"] , ["age",20] ]
	// for(let index in personArray){
	//     console.log(`${personArray[index][0]}: ${personArray[index][1]}`);
	// }
	// for (let index in personArray) {
	// 	let [key, value] = personArray[index];
	// 	console.log(`${key}: ${value}`);
	// }
}
function main2(fName, lName, age) {
	let person = {
		firstName: fName,
		lastName: lName,
		age: age,
	};
	//  keyName: value
	let personKeys = Object.keys(person);
	let personVals = Object.values(person);
	for (let index in personKeys) {
		console.log(`${personKeys[index]}: ${personVals[index]}`);
	}
}
​function main3(fName, lName, age) {
	let person = {
		firstName: fName,
		lastName: lName,
		age: age,
	};
	//  keyName: value
	for (let key in person) {
		// console.log(`${key}: ${person[key]}`);
	}
	console.log(`${key}: ${person[key]}`);
}
main1("Peter", "Pan", 20);
main2("Jane", "Doe", 40);
main3("Jack", "Sparrow", "unknown");