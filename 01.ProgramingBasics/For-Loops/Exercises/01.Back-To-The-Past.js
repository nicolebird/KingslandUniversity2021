function calculatedFunds(legacyMoney, yearsToBeLived) {

    let spentMoney = 0.00;
    
    for (i=1800; i <= yearsToBeLived; i++) {
        if (i % 2 == 0) {
            //i % 2 === 0 is used to cover every even year
            spentMoney += 12000;
        } else {
            //ever other year (odd)
            spentMoney += 12000 + ((18 + (i - 1800)) * 50);
        }
        
    } 

    if (spentMoney > legacyMoney) {
        let moneyNeeded = spentMoney - legacyMoney;
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`);
    } else {
        let moneyLeft = legacyMoney - spentMoney;
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    }
    
}
calculatedFunds(50000, 1802);