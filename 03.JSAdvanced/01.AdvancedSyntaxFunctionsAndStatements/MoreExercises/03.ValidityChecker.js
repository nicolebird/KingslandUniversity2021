//Shorter version
function main([x1, y1, x2, y2]) {
    result(x1, y1, 0, 0);
    result(x2, y2, 0, 0);
    result(x1, y1, x2, y2);
    function result(x1, y1, x2, y2) {
        const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        const validString = Number.isInteger(distance) ? 'valid' : 'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validString}`);
    }
}

//Long version
function printArePointsValid(pointsArray) {
    function getDistanceBetweenPoints(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    function getPointsValidityStatus(x1, y1, x2, y2) {
        let distance = getDistanceBetweenPoints(x1, y1, x2, y2),
            status = Number.isInteger(distance) ? "valid" : "invalid";

        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`;
    }

    let startOfCoordinateSystemX = 0,
        startOfCoordinateSystemY = 0;

    for (let i = 0; i < pointsArray.length - 3; i += 4) {
        let x1 = pointsArray[i],
            y1 = pointsArray[i + 1],
            x2 = pointsArray[i + 2],
            y2 = pointsArray[i + 3];

        console.log(getPointsValidityStatus(x1, y1, startOfCoordinateSystemX, startOfCoordinateSystemY));
        console.log(getPointsValidityStatus(x2, y2, startOfCoordinateSystemX, startOfCoordinateSystemY));
        console.log(getPointsValidityStatus(x1, y1, x2, y2));
    }
}