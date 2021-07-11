function main(hours, minutes) {
	let totalHours = hours;
	let totalMinutes = minutes + 15;

	if (totalMinutes > 59) {
		totalHours = totalHours + 1;
		totalMinutes = totalMinutes - 60;

		// console.log(totalMinutes);
		//convert 60 mins to 1 hr here
	}
	// console.log(totalHours, totalMinutes);
	// if(totalHours <= 23){
	//     // totalHours = totalHours;
	//     // totalMinutes = totalMinutes;
	//     console.log(`${totalHours}:${totalMinutes}`);
	// }
	//if total minutes are less than 10 leading zero is needed
	if (totalHours > 23) {
		totalHours = totalHours - 24;
	}

	if (totalMinutes < 10) {
		console.log(`${totalHours}:0${totalMinutes}`);
	} else {
		console.log(`${totalHours}:${totalMinutes}`);
	}
}

main(1, 46);
//main(0, 01);
//main(23, 59);

//hours always be 0 to 23
