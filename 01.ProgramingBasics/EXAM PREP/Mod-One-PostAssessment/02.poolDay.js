function main(numberOfPpl, entranceFee, sunbedCost, umbrellaCost  ) {
    let totalEntranceFee = numberOfPpl * entranceFee;
    let totalSunbedCost = Math.ceil((numberOfPpl * 0.75)) * sunbedCost;
    //this calculation is because only 75% of the team wants sunbeds 
    let totalUmbrellaCost = Math.ceil((numberOfPpl * 0.50)) * umbrellaCost;
    //this calculation is because the umbrella is enough for 2 people so the umbrella cost will be multiplied by 1/2 of the number of ppl
    let totalCost = totalEntranceFee + totalSunbedCost + totalUmbrellaCost;
    //total trip cost will be found by adding up all amounts spent (entrancefee, sunbeds, umbrellas)
    console.log(`${totalCost.toFixed(2)} dollars.`);
}
main(21, 5.50, 4.40, 6.20);
main(50,6,8,4);


/**
 * It is hot and sunny outside, so your boss decides to organize a workday by the swimming pool. Your
task is to write a program that calculates the amount that should be paid for the event. An entrance
fee must be paid for by every single person. You should keep in mind that an umbrella is
enough for two people. It is known that only 75% of the team wants sunbeds. In the calculation of
the number of umbrellas and sunbeds, their number should be rounded up to the nearest
integer number. 
 */

//DEFINITION for Math.ceil() -->The Math. ceil() function always rounds a number up to the next largest integer.