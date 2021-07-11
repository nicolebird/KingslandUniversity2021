function main(n1, n2, n3) {
	if (n1 < n2 && n2 < n3) {
		console.log("Ascending");
	} else if (n1 > n2 && n2 > n3) {
		console.log("Descending");
	} else {
		console.log("Not sorted");
	}
}

main(2, 3, 1);
//ascending is going up 1, 2, 3
//descending is doing down 3, 2, 1
