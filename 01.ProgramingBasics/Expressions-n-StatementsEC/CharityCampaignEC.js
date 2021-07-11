//Calculates the total amount raised for charity.

function main(days, bakers, cakes, waffles, pancakes) {
    
    let cakeAmount = cakes * 45;
    let waffleAmount = waffles * 5.80;
    let pancakeAmount = pancakes * 3.20;
    let amountPerDay = (cakeAmount + waffleAmount + pancakeAmount) * bakers;
    let campaignAmount = amountPerDay * days;
    let costs = campaignAmount / 8;
    let amountRaised = campaignAmount - costs;

    console.log(amountRaised.toFixed(2));
}
main(20, 8, 14, 30, 16);

//cake - $45
//waffle - $5.80
//pancake - $3.20
//1/8 of final amount for costs