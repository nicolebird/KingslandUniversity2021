//You will be given a number that will be distance in meters.  Write a program that converts meters to kilometers formatted to the second demical point.


function main(distance) {
    let convertedDistance = distance * 0.001;
    //convertedDistance total is the distance multiplied by 0.001
    console.log(convertedDistance.toFixed(2));
}
main(1852); //1.85
main(798); //0.80

