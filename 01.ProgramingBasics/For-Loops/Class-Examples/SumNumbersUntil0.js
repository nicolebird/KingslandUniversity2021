function main(numbers){
    let sum = 0;
    for(;;) {
        let currNum = numbers.shift();
        if(currNum == 0 || currNum == undefined){
            //if you put if(currNum != 0) it will skip to Goodbye
            // adding || currNum == undefined it will catch loops that want to run forever.
          break;
        
        }
        sum += currNum;
        console.log(`Sum = ${sum}`);
    }
    console.log(`Good bye`);
}

main( [5, 3, 2, 0] );


//Infinite Loop example
// If you don't issue a number it will be undefined
