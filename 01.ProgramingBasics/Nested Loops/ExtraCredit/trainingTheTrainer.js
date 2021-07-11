function main(juryCount, presentationNameAndRatings) {
    let currentPresentation = "";
    let ratingsSum = 0;
    let totalRatings = 0;
    let avg = 0;
    let totalAvg = 0;
    let cursor = 0;
    currentPresentation = presentationNameAndRatings.shift();
    while (currentPresentation != "Finish" && currentPresentation != undefined) {
        for (i = 0; i < juryCount; i++) {
            ratingsSum += Number(presentationNameAndRatings.shift());
            cursor++;
        }
        avg = ratingsSum / juryCount;
        console.log(`${currentPresentation} - ${avg.toFixed(2)}.`);
        currentPresentation = presentationNameAndRatings.shift();
        totalRatings += ratingsSum;
        ratingsSum = 0;
    }
    totalAvg = totalRatings / cursor;
    console.log(`Student's final assessment is ${totalAvg.toFixed(2)}.`);
}
main(2, ["While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish"]);