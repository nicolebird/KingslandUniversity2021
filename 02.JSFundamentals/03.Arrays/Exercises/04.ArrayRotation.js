//Write a function that receives an array and a number of rotations you have to perform (first element goes at the end).

//OUTPUT: Print the resulting array elements separated by single space.

function main(array, numberOfRotations){
    for(i = 0; i < numberOfRotations; i++){
    array.push(array.shift());
    //push number forward into shifted space; making the exchange
    }
    array = array.toString();
    //The toString () method in Javascript is used with a number and converts the number to a string. It is used to return a string representing the specified Number object.
    //array is equal to the string of numbers
    array = array.replace(`,`, ` `);
    //  replace method is used on strings in JavaScript to replace parts of string with characters. It is often used like so: const str = 'JavaScript'; const newStr = str.replace("ava", "-"); console.log(newStr); // J-Script
    let result = array.replace(/,/g, ` `);
    //g is for global search. Meaning it'll match all occurrences. You'll usually also see i which means ignore case. 
    console.log(result);
    
}

main([51, 47, 32, 61, 21], 2);
main([32,21,61,1], 4);
main([2,4,15,31], 5);