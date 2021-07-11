//find the mess up for test 8 to fail
function main(examHour, examMin, arriveHour, arriveMin) {
    let examTime = (examHour * 60) + examMin;
    let arrivalTime = (arriveHour * 60) + arriveMin;
    let timeDifference = examTime - arrivalTime;
    let earlyHour;
    let earlyMin;
    let lateHour;
    let lateMin;
    if (timeDifference >= 0 && timeDifference <= 30) {
        if (timeDifference === 0) {
            console.log("On time"); 
        } else {
            earlyMin = timeDifference % 60;
            if (timeDifference < 10) {
                console.log("0" + timeDifference + " minutes before the start");
            } else {
                console.log("On time");
                console.log(timeDifference + " minutes before the start");
            }
        }
    } else if (timeDifference > 30) {
        earlyHour = Math.floor(timeDifference / 60);
        earlyMin = timeDifference % 60;
        if (timeDifference > 30 && timeDifference <= 59) {
            if (timeDifference < 10) {
                console.log("Early");
                console.log("0" + timeDifference + " minutes before the start");
            } else {
                console.log("Early");
                console.log(timeDifference + " minutes before the start");
            }
        } else if (timeDifference === 60) {
            if (earlyHour > 23) {
                if (earlyMin < 10) {
                    earlyHour = 0;
                    console.log("Early");
                    console.log(earlyHour + ":0" + earlyMin + " hours before the start");
                } else {
                    earlyHour = 0;
                    console.log("Early");
                    console.log(earlyHour + ":0" + earlyMin + " hours before the start");
                }
            } else {
                console.log("Early");
                console.log(earlyHour + ":" + earlyMin + " hours before the start");
            }
        } else {
            if (earlyHour > 23) {
                if (earlyMin < 10) {
                    console.log("Early");
                    console.log(earlyHour + ":0" + earlyMin + " hours before the start");
                } else {
                    console.log("Early");
                    console.log(earlyHour + ":" + earlyMin + " hours before the start");
                }
            } else {
                if (earlyMin < 10) {
                    console.log("Early");
                    console.log(earlyHour + ":0" + earlyMin + " hours before the start");
                } else {
                    console.log("Early");
                    console.log(earlyHour + ":" + earlyMin + " hours before the start");
                }
            }
        }
    } else {
        timeDifference = Math.abs(timeDifference);
        lateHour = Math.floor(timeDifference / 60);
        lateMin = timeDifference % 60;
        if (timeDifference <= 59) {
            if (lateHour > 23) {
                if (timeDifference < 10) {
                    console.log("Late");
                    console.log("0" + timeDifference + " minutes after the start");
                } else {
                    console.log("Late");
                    console.log(timeDifference + " minutes after the start");
                }
            } else {
                if (timeDifference < 10) {
                    console.log("Late");
                    console.log("0" + timeDifference + " minutes after the start");
                } else {
                    console.log("Late");
                    console.log(timeDifference + " minutes after the start");
                }
            }
        } else if (timeDifference === 60) {
            if (lateHour > 23) {
                if (lateMin < 10) {
                    lateHour = 0;
                    console.log("Late");
                    console.log(lateHour + ":0" + lateMin + " hours after the start");
                } else {
                    lateHour = 0;
                    console.log("Late");
                    console.log(lateHour + ":" + lateMin + " hours after the start");
                }
            } else {
                if (lateMin < 10) {
                    console.log("Late");
                    console.log(lateHour + ":0" + lateMin + " hours after the start");
                } else {
                    console.log("Late");
                    console.log(lateHour + ":" + lateMin + " hours after the start");
                }
            }
        } else {
            if (lateHour > 23) {
                if (lateMin < 10) {
                    lateHour = 0;
                    console.log("Late");
                    console.log(lateHour + ":0" + lateMin + " hours after the start");
                } else {
                    lateHour = 0;
                    console.log("Late");
                    console.log(lateHour + ":" + lateMin + " hours after the start");
                }
            } else {
                if (lateMin > 30) {
                    console.log("Late");
                    console.log(lateHour + ":0" + lateMin + " hours after the start");
                } else {
                    console.log("Late");
                    console.log(lateHour + ":" + lateMin + " hours after the start");
                }
            }
        }
    }
}

// //main(9, 30, 10, 01);
// // main(9, 00, 8, 30);
// // main(9, 00, 10, 30);
// // main(14, 00, 14, 05);
// // main(10, 00, 10, 00);
main(11, 30, 10, 55);