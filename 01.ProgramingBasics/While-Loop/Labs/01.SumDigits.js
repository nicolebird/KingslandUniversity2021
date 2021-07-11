function main(inputNumber){

    let sum = 0;
    inputNumber = Math.abs(inputNumber);

    while(inputNumber > 0){
        sum += inputNumber % 10; // 4 +
        // 5634 => 563 => 56 => 5 => 0
        inputNumber = Math.floor(inputNumber / 10); //pasrseInt() -- Math.trunc
    }
    console.log(sum);

}
main(5634, [5 + 6 + 3 + 4]);

//define Math.floor
//define parseInt()