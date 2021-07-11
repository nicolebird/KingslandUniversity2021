function main(income, gpa, minWage) {
	let resultsScholarAmount = gpa * 25;
	let socialScholarAmount = 0.35 * minWage;

	if (minWage < income && gpa <= 5.5) {
		console.log(`You cannot get a scholarship!`);
	} else if (income < minWage && gpa >= 4.5 && gpa >= 5.5 && socialScholarAmount > resultsScholarAmount) {
		let amount = socialScholarAmount;
		console.log(`You get a Social scholarship ${Math.floor(amount)} BGN`);
	} else if (income < minWage && gpa >= 4.5 && gpa >= 5.5 && socialScholarAmount <= resultsScholarAmount) {
		let amount = resultsScholarAmount;
		console.log(`You get a scholarship for excellent results ${Math.floor(amount)} BGN`);
	}
}

main(480, 4.6, 450);
//main(300, 5.65, 420);
//main(310, 5.8, 350);
