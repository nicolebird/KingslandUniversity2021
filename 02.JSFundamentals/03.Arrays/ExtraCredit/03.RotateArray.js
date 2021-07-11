function main(arrayStrings) {
    let rotation = Number(arrayStrings.pop());
    for (let i = 0; i < rotation; i++) {
        arrayStrings.unshift(arrayStrings.pop());
    }
    console.log(arrayStrings.join(" ").trim());
}

main([`Banana`,`Orange`,`Coconut`,`Apple`,`15`]);

//Write a function that rotates an array.  The array should be rotated to the right side, meaning that the last element should become the first, upon rotation.
//The INPUT comes as array of strings.  The last element of the array is the amount of rotation you need to perform.
//INPUT: [`1`,`2`,`3`,`4`,`2`] // 3 4 1 2
//INPUT: [`Banana`,`Orange`,`Coconut`,`Apple`,`15`]  // Orange Coconut Apple Banana
//INPUT: [`remove`,`add`,`remove`,`5`]  //Add remove remove


//The OUTPUT is the resuited array after the rotation.  The elements should be printed on one line, separated by a single space.

//HINT: Check if there is a built-in function for inserting elements at the start of the array.
