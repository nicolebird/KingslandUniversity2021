//Write a function that receives two parameters.
//The first parameter will be a string with some words separated by ` , `.
//The second parameter will be a string that contains templates containing `*`.
//Find the word with the exact same length as the template and replace it.

function main(firstParameter, secondParameter){
    let parameter1 = firstParameter.toString(`,`);
    let parameter2 = secondParameter.toString(`*`);

    for (let i =0; i < parameter1.length;i++) {
        if(parameter1 != parameter2){
            console.log()
        }else{
            console.log();
        }
        
    }
    for(let j = 0; j < parameter2.length; j++){
        if(){
            console.log();
        }else{
            console.log();
        }
    }


}

main(`great`, `kingsland is ***** place for learning new programming languages`);
//kingsland is great place for learning new programing languages
main(`great, learning`, `kingsland is ***** place for ******** new programming languages`);
//kingsland is great place for learning new programming languages