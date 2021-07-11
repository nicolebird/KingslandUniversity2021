//Write a function that receives an array of strings and prints the sum of that first and last element in that array.

//input: [`20`,`30`,`40`] //60
//[`10`,`17`,`22`,`33`] //43
//[`11`,`58`,`69`]  //80

function sumFirstAndLast(array){
    console.log(Number(array[0]) + Number(array[array.length - 1]));

    //OR
    //let total = array[0] + array[array.length - 1];
    //console.log(total);
}

sumFirstAndLast([`20`, `30`, `40`]); //60
sumFirstAndLast([`10`,`17`,`22`,`33`]);//43
sumFirstAndLast([`11`,`58`,`69`]);//4

//You are given array of strings holding numbers
//*Calculate and print the sum of the first and last elements.