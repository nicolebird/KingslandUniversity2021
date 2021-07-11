function main(inputString, symbol, matchString){
    let newString = inputString.replace(`_`, symbol);
   if(newString === matchString){
       console.log(`Matched`);
   }else{
       console.log(`Not Matched`);
   }
   //string.replace(searchValue, newValue)

}

main(`Str_ng`, `I`, `Strong`); //Not Matched
main(`Str_ng`, `i`, `String`); //Matched