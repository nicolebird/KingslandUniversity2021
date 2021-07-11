//Write a program which receives an array of strings (space separated values).  You task is to reverse it print its elements.  Swap elements.

//BOTH EXAMPLES WORK

//MY EXAMPLE, SHORT AND TO THE POINT
// function main(initialArray) {
//     console.log(initialArray.reverse().join(' '));
// }
// main(["a", "b", "c", "d", "e"]);  //e d c b a  //The first element should be last, and the last element should be first. 
// main([`abc`,`def`,`hig`,`klm`,`nop`]); //nop klm hig def abc
// main([`33`,`123`,`0`,`dd`]);  //dd 0 123 33

//Patrick's example
function main(arrayOfStrings){
    for(let i=0;i<arrayOfStrings.length/2;i++){

        let temp = arrayOfStrings[i];
        //temp is short for temporary
        arrayOfStrings[i] = arrayOfStrings[arrayOfStrings.length - 1 - i];
        arrayOfStrings[arrayOfStrings.length - 1 - i] = temp;
    }
    console.log(arrayOfStrings.join(` `));
    //The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
}

main(["a", "b", "c", "d", "e"]);  //e d c b a  //The first element should be last, and the last element should be first. 
main([`abc`,`def`,`hig`,`klm`,`nop`]); //nop klm hig def abc
main([`33`,`123`,`0`,`dd`]);  //dd 0 123 33
