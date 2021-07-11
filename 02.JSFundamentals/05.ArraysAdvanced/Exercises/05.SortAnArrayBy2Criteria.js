//Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value as a second.  The comparison should be case-sensitive.
//The input comes as array of strings
//The output is the ordered array of strings.

//HINT: 
// * And array can be sorted by passing a comparison function to the Array.sort() function
//* Creating a comparison function by 2 criteria can be achievedby first comparing by the main criteria, if the 2 items are different (the result of the compare is NOT 0) - returns the result as the result of the comparing function, if the two items are the same by the same by main criteria (the result of the compare is 0), we need to compare by the second criteria and the result of comparing function. 

function main(array) {

    //console.log(Array.from(new Set(arr)).join(" "));
//let newArray = Array.from(new Set(arr));
let output = "";
//this declares the output variable to be a string of elements

    output = array.sort(function (first, second) {
    //sort() method is used to sort the array in place in a given order according to the compare() function. If the method is omitted then the array is sorted in ascending order.
        if (first.length == second.length) {
            if (first < second) return -1;
            else if (first > second) return 1;
            return 0;
            //return first < second;
        } else {
            return first.length - second.length;
        }
    });

    for (i = 0; i < output.length; i++) {
        console.log(output[i]);
    } 
}
main(["alpha", "beta", "gamma"]);
main([`Isacc`, `Theodor`, `Jack`, `Harrison`, `George`]);