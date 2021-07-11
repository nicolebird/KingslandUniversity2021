function main(increasedExpenseList){
    let balance = 0;
    let currentBalanceChange = increasedExpenseList.shift();

    while(currentBalanceChange != "End" &&currentBalanceChange != undefined){
        if(currentBalanceChange > 0){
            // increase
            //balance += currentBalanceChange;
            console.log(`Increase: ${currentBalanceChange.toFixed(2)}`);
        } else if(currentBalanceChange < 0){
            //decrease
            //balance += currentBalanceChange;
            console.log(`Decrease: ${Math.abs(currentBalanceChange).toFixed(2)}`);
        }
         balance += currentBalanceChange;
        //could put this here once instead of twice in the code.  Either way is correct.
        currentBalanceChange = increasedExpenseList.shift();

    }
    console.log(`Balance: ${balance.toFixed(2)}`);

}

main(500, 15.5, -80.35, "End");