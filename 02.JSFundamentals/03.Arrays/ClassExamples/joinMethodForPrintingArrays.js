//Receieve an array of strings (space separated values), reverse it and print it's elements.

function main(arrayOfStrings){
    //arr is the input
    for(let i=0; i < arrayOfStrings.length /2; i++){
        let oldElement = arrayOfStrings[i];
        let previousIndex = arrayOfStrings.length - 1 - i;
        arrayOfStrings[i] = arrayOfStrings[previousIndex];
        //arrayOfStrings[i] = arrayOfStrings.length - 1 - i;
        //use this if not using the let previousIndex portion mentioned above.
        arrayOfStrings[previousIndex] = oldElement;
        //arrayOfStrings.length - 1 - i = arrayOfStrings[i];
    }
    console.log(arrayOfStrings.join(` `));
}

main([`a`, `b`, `c`, `d`, `e`]);