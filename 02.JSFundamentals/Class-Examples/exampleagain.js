let a = "soda";
let b = "noodles";
let price;

if(a == "soda"){
    price = 2
//    var price = 2;
   //var allows for the price to be pulled out of this if because it is global.  This produces bad code.
}
let max = -Infinity;
let array = [10, 25, 5];
for(let i = 0; i < 10; i++){
    let arrayItem = array.shift();
    if (arrayItem > max){
        // let iWas = i;
        // let keeps it local so it never goes outside of the code.
        var iWas = i;
        //var allows for the code to go global
    }
}
console.log(max);
console.log(iWas);

