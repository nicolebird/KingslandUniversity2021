//working code
function main(distanceInKM, gasPer100KM, gasPricePerLiter, moneyWon){
    let totalConsumption = (distanceInKM * gasPricePerLiter) / 100;
    let totalMoneyCost = gasPer100KM * gasPricePerLiter;
    let shareOfEach = moneyWon / 5;
    let remainder = moneyWon - totalMoneyCost; 
    


    if(moneyWon >= totalMoneyCost){
        console.log(`You can go home. ${remainder.toFixed(2)} money left.`);
        
    }else if(moneyWon <= totalMoneyCost){

        console.log(`Sorry, you cannot go home. Each will receive ${shareOfEach.toFixed(2)} money.`);

    }
    

}


main(100, 5, 1.2, 6);
main(120, 5, 1.2, 4);
main(100, 8, 1.2, 20);


//no while loops
//conditional statements