
//WHILE LOOP SOLUTION
function main(inputLines){
    while(true){
        let input = inputLines.shift();
        if(input === "End")
           break;
            //if input is equal to end, end the code
        let sum = 0;
        for(let num = Number(input); num > 0; num = Math.floor(num / 10))
        sum += num % 10;
      console.log(`Sum of digits: ${sum}`);
      
    }
    console.log("Goodbye");
}

main([157, 99, 5, 438, `End`]);


//The Math. floor() function returns the largest integer less than or equal to a given number.

// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

//There is a class example of this in For Loops as well.



