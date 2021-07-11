//find the actual code stuff, could be shorter if it didn't look pretty laid out this way

function main([speed, area]) {
    let allowedSpeeds = {'motorway': 130,'interstate': 90,'city': 50,'residential': 20
    };
    if (speed > allowedSpeeds[area]) {
        let speeding = speed - allowedSpeeds[area];
        logSpeeding(speeding);
    }
 
    function logSpeeding(speeding) {
        if (speeding <= 20) {
            console.log('speeding');
        } else if (speeding <= 40) {
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    }
}


function getSpeedingStatus(speedParameters) {
    let speedLimits = { motorway: 130, interstate: 90,city: 50,residential: 20
    };

    let speedDifference = Number(speedParameters[0]) - speedLimits[speedParameters[1]];
    let speedingStatus = "";

    if (speedDifference > 0) {
        if (speedDifference <= 20) {
            speedingStatus = "speeding";
        } else if (speedDifference <= 40) {
            speedingStatus = "excessive speeding";
        } else {
            speedingStatus = "reckless driving";
        }
    }

    return speedingStatus;
}