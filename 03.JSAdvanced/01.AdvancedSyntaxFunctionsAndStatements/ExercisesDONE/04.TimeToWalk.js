//Write a function that calculates how long it takes a student to get to university
//The function takes three numbers:
// The first is the number of steps the student takes from their home to the university
// The second number is the length of the student's footprint in meters.
// The third number is the studdent speed in km/h

// Every 500 meters the student rests and takes a 1 minute break

//Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.

//The input comes as three numbers
//The output should be printed on the console.

//Input: 4000, 0.60, 5 Output: 00:32:48
//Input: 2564, 0.70, 5.5  Output: 00:22:35

function main(stepsCount, footstepMeters, speedKMH) {
    const metersBeforeRest = 500;

    let distanceInMeters = stepsCount * footstepMeters;
    //Calculate distanceMeters by multiplying the stepsCount by footstepMeters
    let speedInMetersPerSecond = speedKMH * (1000 / 3600);
    //Calculate speedMeterSec by first dividing 1000 by 3600 then multiplying that by speedKHM
    let timeInSeconds = distanceInMeters / speedInMetersPerSecond;
    //Calculate timeInSeconds by dividing distanceInMeters by speedInMetersPerSec

    let restMinutes = Math.floor(distanceInMeters / metersBeforeRest);

    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor(timeInSeconds / 60) + restMinutes;
    let seconds = Math.round(timeInSeconds % 60);

    console.log(`${hours.toString().padStart(2, 0)}:${(minutes).toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`);
    //The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
    
}

main(4000,0.60,5); // 00:32:48
main(2564,0.70,5.5); // 00:22:35

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart