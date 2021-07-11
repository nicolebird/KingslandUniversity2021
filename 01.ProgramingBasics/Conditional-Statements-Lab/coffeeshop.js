function coffeeShop(drink, extra){
    let price = 0;
    if(drink === `coffee`){
        console.log(`$1.00`);
    }else if(drink === `tea`){
        console.log(`$0.60`);
    } 
    
    if(extra === `sugar`){
        console.log(drink + `$0.40`);
    }

}

coffeeShop(`coffee`, `sugar`);
// coffeeShop(`tea`, `no`);


