//Write a program which receives an array of numbers and condense them by summing adjacent couples of elements until a single number is obtained

function main(toBeCondensed) {
    if (toBeCondensed == 1) {
        console.log(toBeCondensed[0]);
    } else {
        while (toBeCondensed.length > 1) {
            let condensedArray = [];
            for (i = 0; i < toBeCondensed.length - 1; i++) {
                condensedArray[i] = toBeCondensed[i] + toBeCondensed[i + 1];
            }
            toBeCondensed = condensedArray;
        }
        console.log(toBeCondensed.toString());
    }
}
main([2, 10, 3]);  //25
//2 10 3 -> 2+10+10+3 -> 12 13 -> 12+13 -> 25
main([5,0,4,1,2]); //35
//5 0 4 1 2 -> 5+0 0+4 4+1 1+2  -> 5 4 5 3 -> 5+4 4 4+5 5+3  -> 9 9 8  ->  9+9 9+8 ->  18 17  ->  18+17  -> 35
main([1]); //1
//1 is already condensed to number 

