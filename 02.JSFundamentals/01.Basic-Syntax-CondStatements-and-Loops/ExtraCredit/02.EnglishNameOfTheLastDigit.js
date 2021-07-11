//Write a function that returns the English name of the last digit of a given number.  Write a program that receives a number and prints the returned value from this function.

function englishName(name){
    let lastDigit = 0;
    lastDigit = name % 10;

    if(lastDigit == 0){
        lastDigit = `zero`;
    } else if(lastDigit == 1){
        lastDigit = `one`;
    } else if(lastDigit == 2){
        lastDigit = `two`;
    } else if(lastDigit == 3){
        lastDigit = `three`;
    } else if(lastDigit == 4){
        lastDigit = `four`;
    } else if(lastDigit == 5){
        lastDigit = `five`;
    } else if(lastDigit == 6){
        lastDigit = `six`;
    } else if(lastDigit == 7){
        lastDigit = `seven`;
    } else if(lastDigit == 8){
        lastDigit = `eight`;
    } else if(lastDigit == 9){
        lastDigit = `nine`;
    }
    console.log(lastDigit);
}



englishName(512); //two
englishName(1); //one
englishName(1643); //three