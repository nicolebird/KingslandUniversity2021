function main(dayNum) {
	switch (dayNum) {
		case 1:
			//console.log("Monday");
			dayNum = "Monday";
			break;
		case 2:
			//console.log("Tuesday");
			dayNum = "Tueday";
			break;
		case 3:
			//console.log("Wednesday");
			dayNum = "Wednesday";
			break;
		case 4:
			//console.log("Thursday");
			dayNum = "Thursday";
			break;
		case 5:
			//console.log("Friday");
			dayNum = "Friday";
			break;
		case 6:
			//console.log("Saturday");
			dayNum = "Saturday";
			break;
		case 7:
			//console.log("Sunday");
			dayNum = "Sunday";
			break;
		default:
			//console.log("Error");
			dayNum = "Error";
			break;
	}
	console.log(dayNum);
}

main(4);

//if using console.log with each name you don't use the ending console.log
