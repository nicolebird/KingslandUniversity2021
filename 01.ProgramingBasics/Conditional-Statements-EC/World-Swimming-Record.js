function main(recordInSeconds, distanceInMeters, timeInSecondsPerMeters) {
    let timeInSeconds = distanceInMeters * timeInSecondsPerMeters;
    let resistance = parseInt(distanceInMeters / 15) * 12.5;
    let totalTimeWithResistance = timeInSeconds + resistance;
    let timeSlower = totalTimeWithResistance - recordInSeconds;

    if (totalTimeWithResistance > recordInSeconds) {
        console.log(`No, he failed! He was ${timeSlower.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTimeWithResistance.toFixed(2)} seconds.`);
    }
}

main(10464, 1500, 20);
//main(55555.67, 3017, 5.03);