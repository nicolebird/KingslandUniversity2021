function sumFirstAndLast(array){
    console.log(Number(array[0]) + Number(array[array.length - 1]));

    //OR
    //let total = array[0] + array[array.length - 1];
    //console.log(total);
}

sumFirstAndLast([20, 30, 40]); //60
sumFirstAndLast([5,10]);//15
sumFirstAndLast([2]);//4

//You are given array of strings holding numbers
//*Calculate and print the sum of the first and last elements.
