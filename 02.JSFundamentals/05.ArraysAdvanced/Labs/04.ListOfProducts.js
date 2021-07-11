// You will receive an array of products. 
// Print a numbered array of all the products ordered by name. 

function main(array) {

    let i = 1;

    array.sort().map((x) => {
        console.log(`${i}.${x}`);
        i++;
    });
}
main(["Potatoes", "Tomatoes", "Onions", "Apples"]);

//PATRICK'S LAB WORK UP OF THIS CODE.

function main(productsArr) {
	let sortedProducts = productsArr.sort();

	for (let index in sortedProducts) {
		console.log(`${Number(index) + 1}.${sortedProducts[index]}`);
	}
}

main(["Potatoes", "Tomatoes", "Onions", "Apples"]);