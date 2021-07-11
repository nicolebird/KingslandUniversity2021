function main(numberOfBiscuits, employees, bakedBiscuits) {
    let thirdDay = Math.floor(numberOfBiscuits * 0.75 * employees);
    let totThirdDay = (thirdDay * 10);
    let totalBiscuits = Math.floor((numberOfBiscuits * 20 * employees) + totThirdDay);
    let percent = ((totalBiscuits - bakedBiscuits) / bakedBiscuits * 100).toFixed(2);
    
    
    if (thirdDay < 1) {
        thirdDay = 0;
    }
    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);
    
    
    if (totalBiscuits > bakedBiscuits) {
        console.log(`You produce ${percent} percent more biscuits.`);
    } else {
        percent = ((bakedBiscuits - totalBiscuits) / bakedBiscuits * 100).toFixed(2);
        console.log(`You produce ${percent} percent less biscuits.`);
    }
}