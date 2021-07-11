//Write a function which receives two string arrays and merges them into a third array.
//IF the index of the element is even, add into the third array the sum of both elements at that index
//IF the index of the element is odd, add the concatenation of both elements at the index

//INPUT: As input you will receive two string arrays.

//OUTPUT: As output you should print the resulting third array, each element shoulw be separated by "-".

function main(firstArray, secondArray) {
    let thirdArray = "";

    for (let i = 0; i < firstArray.length; i++) {
    //why remember to add let in the for loop
    //comparing arrays against each other: total amount of list numbers in the array is the .length has to be less than the whole first array
        if (i % 2 == 0) { //if isEven
            if (i == (firstArray.length - 1)) {
            //the minus 1 is to account for the fact that the array started at 0.  So if there are 5 numbers in the array [0,1,2,3,4] the last number would be 4 because the first number is 0.  (this is only an example)
                thirdArray += (Number(firstArray[i]) + Number(secondArray[i]));
            } else {
                thirdArray += (Number(firstArray[i]) + Number(secondArray[i]) + " - ");
            }
        } else { //if isOdd
            if (i == (firstArray.length - 1)) {
                thirdArray += (firstArray[i] + secondArray[i]);
            } else {
                thirdArray += (firstArray[i] + secondArray[i] + " - ");
            }
        }
    }
    console.log(thirdArray);
}







main(["5","15","23","56","35"], ["17","22","87","37","11"]);
main([`13`,`12312`, `5`, `77`, `4`], [`22`, `333`, `5`, `122`, `44`]);