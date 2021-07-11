//bonusPoints is the main
function main(points) {
	//0 1 2 3
	if (points >= 0 && points <= 3) {
		points += 5;
	} else if (points >= 4 && points <= 6) {
		points += 15;
		// 7 8 9
	} else if (points >= 7 && points <= 9) {
		points += 20;
	}
	console.log(points);
}

main(30);

//Logical AND && problem
