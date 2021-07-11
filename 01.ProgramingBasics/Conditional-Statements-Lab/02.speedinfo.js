function main(speed) {
	if (speed <= 30) {
		console.log("Slow");
	} else {
		// could use else if(speed > 30) but it takes longer to run the test
		console.log("Fast");
	}
}

main(25);
main(60);
