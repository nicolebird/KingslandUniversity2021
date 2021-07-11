function main(item) {
	if (
		item === "curry" ||
		item === "noodles" ||
		item === "sushi" ||
		item === "spaghetti"
	) {
		console.log("food");
	} else if (item === "tea" || item === "water" || item === "coffee") {
		console.log("drink");
	} else {
		console.log("unknown");
	}
}

main("coffee");

// This || means OR in JavaScript
